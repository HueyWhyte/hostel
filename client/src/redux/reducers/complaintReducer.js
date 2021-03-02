const initialState = {
  complaint: {},
  complaints: [],
};

const complaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMPLAINTS":
      return {
        ...state,
        complaints: action.payload,
      };
    case "FETCH_COMPLAINT":
      return {
        ...state,
        complaint: action.payload,
      };
    case "NEW_COMPLAINT":
      return {
        ...state,
        complaints: [...state.complaint, action.payload],
      };
    case "RESOLVE_COMPLAINT":
      return {
        ...state,
        complaints: state.complaints.filter((com) => com.resolved === false),
      };
    default:
      return state;
  }
};

export default complaintReducer;
