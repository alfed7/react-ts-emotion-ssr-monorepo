import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from 'react-router-dom/server'
import { Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { routes, renderRoutes } from "@retesm/web";
import serialize from "serialize-javascript";
import { HelmetProvider } from "react-helmet-async";

export default (req: any, store: any) => {
  const helmetContext: any = {};

  const contentJsx = <Provider store={store}>
    <Router location={req.url}>
      <HelmetProvider context={helmetContext}>
        <Routes>
          {renderRoutes(routes)}
        </Routes>
      </HelmetProvider>
    </Router>
  </Provider>;
  const content = renderToString(contentJsx);

  //console.log("helmetContext", helmetContext);
  const { helmet } = helmetContext;
  const helmetTitle = (helmet && helmet.title) ? helmet.title.toString() : '';
  const helmetMeta = (helmet && helmet.meta) ? helmet.meta.toString() : '';
  const html = `<!DOCTYPE html>
  <html>
    <head>
      ${helmetTitle}
      ${helmetMeta}
      <script src="main.js" defer></script>
    </head>
    <body>
      <div id="app">${content}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
    </body>
  </html>`;
  return html;
};
