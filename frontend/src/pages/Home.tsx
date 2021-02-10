import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RoomState, Room } from "../assets/types";

function Home() {
  const rooms = useSelector<RoomState, RoomState["rooms"]>(
    (state) => state.rooms
  );

  return (
    <div>
      <h1>Rooms</h1>

      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {rooms?.map((room: Room) => (
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
    </div>
  );
}

export default Home;
