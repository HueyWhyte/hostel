import axios from "axios";

export const fetchRooms = () => (dispatch) => {
  axios
    .get("/room")
    .then((res) => {
      dispatch({
        type: "FETCH_ROOMS",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchRoom = (id) => (dispatch) => {
  axios.get(`/room/${id}`).then((res) => {
    dispatch({
      type: "FETCH_ROOM",
      payload: res.data,
    });
  });
};

export const fetchStudentInRoom = (id) => (dispatch) => {
  axios.get(`/room/students/${id}`).then((res) => {
    dispatch({
      type: "FETCH_STUDENTS_IN_ROOM",
      payload: res.data,
    });
  });
};
