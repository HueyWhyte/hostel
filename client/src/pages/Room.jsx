import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchRoom, fetchStudentInRoom } from "../redux/actions/roomAction";

class Room extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchRoom(id);
    this.props.fetchStudentInRoom(id);
  }

  render() {
    const { room, students } = this.props;
    return (
      <div>
        <h1>Room id {room._id}</h1>

        <section style={{ marginTop: 30 }}>
          <h1>students</h1>

          <div>
            {students?.map((student) => (
              <div key={student._id}>
                <h2>{student.name}</h2>
                <p>{student.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    room: state.rooms.room,
    students: state.rooms.students,
  };
};

export default connect(mapStateToProps, { fetchRoom, fetchStudentInRoom })(
  Room
);
