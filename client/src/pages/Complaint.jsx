import React, { Component } from "react";
import styled from "styled-components";

import { device } from "../assets/mediaScreens";

const ComplaintPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const ComplaintCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  border-radius: 12px;
  padding: 4px;
  margin: 10px 5px;

  @media ${device.mobile} {
    width: 89vw;
  }

  @media ${device.laptop} {
    width: 50vw;
  }
`;

const ResolveButton = styled.p`
  background-color: blue;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 19px;
  padding: 7px;
  margin: 6px;
  margin-left: auto;
  cursor: pointer;
`;

export default class Complaint extends Component {
  state = {
    complaints: [],
  };

  componentDidMount() {
    fetch("https://hostelm.herokuapp.com/api/complaint")
      .then((res) => res.json())
      .then((complaints) => {
        this.setState({ complaints });
      })
      .catch((err) => console.log(err));
  }

  resolveIssue = (id) => {
    fetch(`https://hostelm.herokuapp.com/api/complaint/${id}/resolve`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((complaint) => {
        console.log(complaint);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <ComplaintPageContainer>
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
      </ComplaintPageContainer>
    );
  }
}
