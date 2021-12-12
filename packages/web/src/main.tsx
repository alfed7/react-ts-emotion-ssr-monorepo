import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import routes from "./routes";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import reducers from "./redux/reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { renderRoutes } from "./components/layout";
const loggerMiddleware = createLogger();

declare global {
  interface Window { INITIAL_STATE: any; }
}

export const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

const render = window.INITIAL_STATE ? ReactDOM.hydrate : ReactDOM.render;

render(
  <Provider store={store}>
    <Router><Routes>{renderRoutes(routes)}</Routes></Router>
  </Provider>,
  document.getElementById("app")
);

// import ReactDOM from "react-dom";
// import { App } from "./App";

// const rootContainerId = "root";

// const container =
//   document.getElementById(rootContainerId) ?? createContainer(document.body);

// if (container.hasAttribute("data-ssr")) {
//   ReactDOM.hydrate(<App />, container);
// } else {
//   ReactDOM.render(<App />, container);
// }

// function createContainer(targetParent: Element) {
//   const newContainer = document.createElement("div");
//   newContainer.id = rootContainerId;
//   return targetParent.appendChild(newContainer);
// }
