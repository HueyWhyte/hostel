import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchRooms } from "../redux/actions/roomAction";
import { Container } from "../assets/Styles";
class Home extends Component {
  state = {
    rooms: [],
  };

  componentDidMount() {
    this.props.fetchRooms();
    // this.setState({ rooms: this.state.rooms });

    fetch("https://hostelm.herokuapp.com/api/room")
      .then((res) => res.json())
      .then((rooms) => {
        this.setState({ rooms });
      })
      .catch((err) => console.log(err));
  }

  render() {
    // const { rooms } = this.props;

    return (
      <Container>
        <h1>Rooms</h1>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {this.state.rooms.map((room) => (
            <Link
              key={room._id}
              to={`/room/${room._id}`}
              style={{
                backgroundColor: "grey",
                padding: 5,
                borderRadius: 12,
                margin: 10,
              }}
            >
              <h1>{room.number}</h1>
            </Link>
          ))}
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms.rooms,
  };
};

export default connect(mapStateToProps, { fetchRooms })(Home);
