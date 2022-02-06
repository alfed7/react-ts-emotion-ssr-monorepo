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
