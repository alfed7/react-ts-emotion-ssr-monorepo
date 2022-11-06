import { hydrateRoot, createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import routes from "./routes";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import reducers from "./redux/reducers";
//import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { renderRoutes } from "./components/layout";
import { HelmetProvider } from "react-helmet-async";
const loggerMiddleware = createLogger();

declare global {
  interface Window { INITIAL_STATE: any; }
}

export const store = configureStore({
  reducer: reducers,
  preloadedState: window.INITIAL_STATE,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
});

const isServerSide = window.INITIAL_STATE;

const c = (<HelmetProvider>
  <Provider store={store}>
      <Router><Routes>{renderRoutes(routes)}</Routes></Router>
  </Provider>
</HelmetProvider>);

const container = document.getElementById("app");

if(isServerSide) {
  const root = hydrateRoot(container!, c);
}
else {
  const root = createRoot(container!);
  root.render(c);
}
