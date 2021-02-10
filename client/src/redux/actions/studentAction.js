import axios from "axios";

export const fetchStudents = () => (dispatch) => {
  axios
    .get("student")
    .then((res) => {
      dispatch({
        type: "FETCH_STUDENTS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
