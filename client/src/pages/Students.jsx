import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchStudents } from "../redux/actions/studentAction";

const StudentCard = styled(Link)`
  background-color: grey;
`;

class Students extends Component {
  state = {
    students: [],
  };
  componentDidMount() {
    // this.props.fetchStudents();
    // this.setState({ students: this.props.students });

    fetch(`https://hostelm.herokuapp.com/api/student`)
      .then((res) => res.json())
      .then((students) => {
        this.setState({ students });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>All Students</h1>

        <section style={{ marginTop: 50 }}>
          {this.state.students?.map((student) => (
            <StudentCard to={`/students/${student._id}`} key={student._id}>
              <h2>{student.name}</h2>
              <p>{student.level}</p>
              <p>{student.room.number}</p>
            </StudentCard>
          ))}
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    students: state.students.students,
  };
};

export default connect(mapStateToProps, { fetchStudents })(Students);
