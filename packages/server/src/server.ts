//import finalhandler from "finalhandler";
//import http from "http";
//import serveStatic from "serve-static";
import cookieParser from "cookie-parser";
import express from 'express';
import compression from 'compression';
import dotenv from "dotenv";
//import process from "process";
import path from "path";
import parseUrl from "parseurl";

import { createStore, renderHtml } from "./ssr";
import { matchRoutes } from "react-router";
import { routes } from "@retesm/web";

const parseResult = dotenv.config();
if (parseResult.error) {
  console.log(parseResult.error);
}

type LoadDataFunction = (store: any, urlSearch: string | null) => Promise<void>;
type RouteObjectSsr = {
  loadData: LoadDataFunction,
  component: any
}
const appRootDirectory = path.dirname(
  require.resolve("@retesm/web/package.json")
);
const appBundleDirectory = path.join(appRootDirectory, "build");

const ssr = (req: express.Request, res: express.Response, next: any) => {
  const url_parts = parseUrl(req);
  const urlSearch = url_parts ? url_parts.search : "";
  const urlPath = url_parts ? url_parts.pathname : "";

  const store = createStore(req, res);

  const matches = matchRoutes(routes, urlPath || '');
  if (!matches) {
    res.statusCode = 404;
    next("Not found");
    return;
  }
  const promises = matches
    .map(({ route }) => {
      const r = route as RouteObjectSsr;
      return r.loadData ? r.loadData(store, urlSearch) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        });
      }
      return;
    });
  Promise.all(promises)
    .then(() => {
      const context = {
        pageNotFound: false
      };
      const content = renderHtml(req, store, context);

      // It's better to handle redirects on a client because of browser cache.
      // if(context.url) {
      //   return res.redirect(301, context.url);
      // }
      if (context.pageNotFound) {
        res.statusCode = 404;
        next("Not found");
      }

      sendResponse(res, content);
      next();
    })
    .catch((err) => {
      sendResponse(res, "Error happens: " + err);
      next();
    });
};

function sendResponse(res: express.Response, content: string) {
  res.statusCode = res.statusCode || 200;
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  res.end(content);
}
// Create server
export function createHttpServer(): express.Express {
  const app = express();

  app.use(compression());
  app.use(express.static(appBundleDirectory));
  app.use(cookieParser());
  app.get('/', ssr);

  return app;
}

//const server = createHttpServer();
// const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
//   parseCookies(req, res, () =>
//     serve(req, res, () => ssr(req, res, finalhandler(req, res)))
//   );
// });

// server.listen(port, () => {
//   console.log(`listyenning on port ${port}`);
// });

