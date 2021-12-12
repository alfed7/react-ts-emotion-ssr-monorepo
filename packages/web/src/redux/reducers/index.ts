import { combineReducers } from "redux";
import { alertReducer } from "./alert.reducer";

export default combineReducers({
  alerts: alertReducer,
});
