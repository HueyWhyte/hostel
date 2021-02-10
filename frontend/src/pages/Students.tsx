import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchStudents } from "../redux/actions/studentAction";

const StudentCard = styled(Link)`
  background-color: grey;
`;

export default class Students extends Component {
  // componentDidMount() {
  //   this.props.fetchStudents();
  // }

  render() {
    // const { students } = this.props;
    return (
      <div>
        {/* <h1>All Students</h1>

        <section style={{ marginTop: 50 }}>
          {students?.map((student) => (
            <StudentCard to={`/students/${student._id}`} key={student._id}>
              <h2>{student.name}</h2>
              <p>{student.level}</p>
              <p>{student.room.number}</p>
            </StudentCard>
          ))}
        </section> */}
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     students: state.students.students,
//   };
// };

// export default connect(mapStateToProps, { fetchStudents })(Students);
