import React, { Component } from "react";
import axios from "axios";

import { Container, Form } from "../assets/Styles";

export default class NewComplaint extends Component {
  state = {
    subject: "",
    description: "",
    room: "60216bfe68fd262be493671b",
    student: "",
    students: [],
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
      room: "60216bfe68fd262be493671b",
      student: "60217abf98d6f42200bcc386",
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
        <h1>NewComplaint</h1>

        <Form onSubmit={this.newComplaint}>
          <select required onChange={this.handleInput} name="student" id="">
            <option value="a">Student Name</option>
            {this.state.students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.name}
              </option>
            ))}
          </select>

          <select required onChange={this.handleInput} name="subject" id="">
            <option value="."></option>
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
