import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Room from "./pages/Room";
import Home from "./pages/Home";
import Students from "./pages/Students";
import Student from "./pages/Student";
import NavigationBar from "./components/NavigationBar";
import Complaint from "./pages/Complaint";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavigationBar />

        <Switch>
          <Route exact path="/room/:id" component={Room} />

          <Route exact path="/students/:id" component={Student} />

          <Route exact path="/students" component={Students} />

          <Route exact path="/complaints" component={Complaint} />

          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
