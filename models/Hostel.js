const { model, Schema } = require("mongoose");

let HostelSchema = new Schema({
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
