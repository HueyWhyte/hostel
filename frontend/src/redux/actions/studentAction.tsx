import { Dispatch } from "redux";
import axios from "axios";

export const fetchStudents = () => (dispatch: Dispatch) => {
  axios
    .get("/student")
    .then((res) => {
      dispatch({
        type: "FETCH_STUDENTS",
        payload: res.data,
      });
    })
    .catch((err: string) => {
      console.log(err);
    });
};
