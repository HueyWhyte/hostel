const { model, Schema } = require("mongoose");

let RoomSchema = new Schema({
  number: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Room", RoomSchema);
