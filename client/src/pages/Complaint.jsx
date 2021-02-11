import React, { Component } from "react";
import axios from "axios";
import { Container, ComplaintCard, ResolveButton } from "../assets/Styles";

export default class Complaint extends Component {
  state = {
    complaints: [],
  };

  // https://hostelm.herokuapp.com/api/complaint
  componentDidMount() {
    axios
      .get("https://hostelm.herokuapp.com/api/complaint")
      .then((res) => {
        this.setState({ complaints: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  resolveIssue = (id) => {
    axios
      .put(`https://hostelm.herokuapp.com/api/complaint/${id}/resolve`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <h1>New Complaint</h1>

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
        <br />
        <hr />

        <h1>Resolved Complaint</h1>

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
