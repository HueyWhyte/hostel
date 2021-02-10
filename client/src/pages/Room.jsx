import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchRoom, fetchStudentInRoom } from "../redux/actions/roomAction";

class Room extends Component {
  state = {
    room: {},
    students: [],
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    // this.props.fetchRoom(id);
    // this.props.fetchStudentInRoom(id);

    fetch(`https://hostelm.herokuapp.com/api/room/${id}`)
      .then((res) => res.json())
      .then((room) => {
        this.setState({ room });
      })
      .catch((err) => console.log(err));

    fetch(`https://hostelm.herokuapp.com/api/room/students/${id}`)
      .then((res) => res.json())
      .then((students) => {
        this.setState({ students });
      })
      .catch((err) => console.log(err));

    // this.setState({ room: this.props.room, students: this.props.students });
  }

  render() {
    return (
      <div>
        <h1>Room id {this.state.room._id}</h1>

        <section style={{ marginTop: 30 }}>
          <h1>students</h1>

          <div>
            {this.state.students?.map((student) => (
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
