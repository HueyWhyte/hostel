import axios from "axios";

export const fetchComplaints = () => (dispatch) => {
  axios
    .get("/complaint")
    .then((res) => {
      dispatch({
        type: "FETCH_COMPLAINTS",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchComplaint = () => (dispatch) => {
  axios
    .get("/")
    .then((res) => {
      dispatch({
        type: "FETCH_COMPLAINT",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const resolveComplaint = (id) => (dispatch) => {
  axios
    .put(`https://hostelm.herokuapp.com/api/complaint/${id}/resolve`)
    .then((res) => {
      dispatch({
        type: "RESOLVE_COMPLAINT",
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
