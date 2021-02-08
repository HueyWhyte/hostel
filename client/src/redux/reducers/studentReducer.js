const initialState = {
  student: {},
  students: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STUDENTS":
      return {
        ...state,
        students: action.payload,
      };
    case "FETCH_STUDENT":
      return {
        ...state,
        student: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
