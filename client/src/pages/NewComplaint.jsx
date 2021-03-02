import React, { Component } from "react";
import axios from "axios";

import { Container, Form } from "../assets/Styles";

export default class NewComplaint extends Component {
  state = {
    subject: "",
    description: "",
    room: "",
    student: "",
    students: [],
    rooms: [],
  };

  componentDidMount() {
    // this.props.fetchStudents();
    // this.setState({ students: this.props.students });

    // https://hostelm.herokuapp.com
    axios
      .get("https://hostelm.herokuapp.com/api/student")
      .then((res) => {
        this.setState({ students: res.data });
      })
      .catch((err) => console.log(err));

    axios
      .get("https://hostelm.herokuapp.com/api/room")
      .then((res) => {
        this.setState({ rooms: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  newComplaint = (e) => {
    e.preventDefault();

    const { subject, description, room, student } = this.state;

    const data = {
      subject,
      description,
      room,
      student,
    };

    axios
      .post(`https://hostelm.herokuapp.com/api/complaint/new`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <h1>New Complaint</h1>

        <Form onSubmit={this.newComplaint}>
          <select required onChange={this.handleInput} name="student" id="">
            <option value="">Student Name</option>
            {this.state.students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.name}
              </option>
            ))}
          </select>

          <select required onChange={this.handleInput} name="room" id="">
            <option value="a">Room Number</option>
            {this.state.rooms.map((room) => (
              <option key={room._id} value={room._id}>
                {room.number}
              </option>
            ))}
          </select>

          <select required onChange={this.handleInput} name="subject" id="">
            <option value="">select subject</option>
            <option value="a">Faulty fan</option>
            <option value="b">Broken Window</option>
            <option value="c">Socket</option>
          </select>

          <input
            required
            onChange={this.handleInput}
            type="text"
            name="description"
            id=""
          />

          <input type="submit" value="Submit Complaint" />
        </Form>
      </Container>
    );
  }
}
