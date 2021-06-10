import { combineReducers } from "redux";
import counter from "./counter";
import util from "./util";

const reducers = combineReducers({
  counter,
  util,
});

export default reducers;
