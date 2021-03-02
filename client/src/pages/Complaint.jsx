import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Container, ComplaintCard, ResolveButton } from "../assets/Styles";

import {
  fetchComplaints,
  // resolveComplaint,
} from "../redux/actions/complaintAction";

class Complaint extends Component {
  state = {
    complaints: [],
  };

  // https://hostelm.herokuapp.com/api/complaint
  componentDidMount() {
    fetchComplaints();
    this.fetchComplaintsz();
  }

  fetchComplaintsz = () => {
    axios
      .get("https://hostelm.herokuapp.com/api/complaint")
      .then((res) => {
        this.setState({ complaints: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  resolveIssue = (id) => {
    // resolveComplaint(id);
    axios
      .put(`https://hostelm.herokuapp.com/api/complaint/${id}/resolve`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    let isAuth = true;
    if (!isAuth) {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <h1>Complaints</h1>

        <section>
          {this.state.complaints
            ?.filter((complaint) => complaint.resolved === false)
            .map((complaint) => (
              <ComplaintCard key={complaint._id}>
                <p>subject: {complaint.subject}</p>
                <p>description: {complaint.description}</p>
                <p>
                  by: {complaint.student.name} in room: {complaint.room.number}
                </p>
                <p>{complaint.timestamp}</p>

                <ResolveButton onClick={() => this.resolveIssue(complaint._id)}>
                  Resolve
                </ResolveButton>
              </ComplaintCard>
            ))}
        </section>

        <br />
        <hr />

        <h1>Resolved Complaints</h1>

        <section>
          {this.state.complaints
            ?.filter((complaint) => complaint.resolved === true)
            .map((complaint) => (
              <ComplaintCard key={complaint._id}>
                <p>subject: {complaint.subject}</p>
                <p>description: {complaint.description}</p>
                <p>
                  by: {complaint.student.name} in room: {complaint.room.number}
                </p>
                <p>{complaint.timestamp}</p>

                {/* <ResolveButton>Resolve</ResolveButton> */}
              </ComplaintCard>
            ))}
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    complaints: state.complaints.complaints,
  };
};

export default connect(mapStateToProps, { fetchComplaints })(Complaint);
