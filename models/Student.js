const { model, Schema } = require("mongoose");

const StudentSchema = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Student", StudentSchema);
