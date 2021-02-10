import { Dispatch } from "redux";
import axios from "axios";

import { RoomState } from "../../assets/types";

export const fetchRooms = () => (dispatch: Dispatch) => {
  axios
    .get("/room")
    .then((res) => {
      dispatch({
        type: "FETCH_ROOMS",
        payload: res.data,
      });
    })
    .catch((err: string) => {
      console.log(err);
    });
};

export const fetchRoom = (id: string) => (dispatch: Dispatch) => {
  axios.get(`/room/${id}`).then((res) => {
    dispatch({
      type: "FETCH_ROOM",
      payload: res.data,
    });
  });
};

export const fetchStudentInRoom = (id: string) => (dispatch: Dispatch) => {
  axios.get(`/room/students/${id}`).then((res) => {
    dispatch({
      type: "FETCH_STUDENTS_IN_ROOM",
      payload: res.data,
    });
  });
};
