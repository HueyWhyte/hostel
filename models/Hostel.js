const { model, Schema } = require("mongoose");

const HostelSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Hostel", HostelSchema);
