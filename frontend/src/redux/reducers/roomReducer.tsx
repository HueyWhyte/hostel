// import { Room } from "../../assets/types";

const initialState = {
  room: {},
  rooms: [],
  students: [],
};

const roomReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_ROOMS":
      return {
        ...state.rooms,
        rooms: action.payload,
      };
    case "FETCH_ROOM":
      return {
        ...state.room,
        room: action.payload,
      };
    case "FETCH_STUDENTS_IN_ROOM":
      return {
        ...state.students,
        students: action.payload,
      };
    case "NEW_ROOM":
      return {
        ...state.room,
        rooms: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
