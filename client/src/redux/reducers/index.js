import { combineReducers } from "redux";
import roomReducer from "./roomReducer";
import studentReducer from "./studentReducer";
import complaintReducer from "./complaintReducer";

const rootReducer = combineReducers({
  rooms: roomReducer,
  students: studentReducer,
  complaints: complaintReducer,
});

export default rootReducer;
// http://localhost:8900
