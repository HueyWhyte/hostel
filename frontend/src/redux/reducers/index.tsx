import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  students: studentReducer,
});

export default rootReducer;
