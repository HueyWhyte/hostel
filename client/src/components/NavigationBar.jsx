import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationBarContainer = styled.div`
  background-color: #c9c9f3;
  top: 0;
  position: sticky;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;

  > a {
    text-decoration: none;
  }
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <NavigationBarContainer>
        <NavLink to="/">Home</NavLink>

        <NavLink exact to="/students">
          Students
        </NavLink>

        <NavLink exact to="/complaints">
          Complaints
        </NavLink>

        <NavLink exact to="/newcomplaint">
          New Complaint
        </NavLink>
      </NavigationBarContainer>
    );
  }
}
