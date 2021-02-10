const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/room", require("./routes/roomRoutes"));
app.use("/api/student", require("./routes/studentRoutes"));
// https://hostelm.herokuapp.com
// "mongodb://localhost:27017/hostel_management"
// "mongodb+srv://HueyWhyte:Famous10@whyte.wdm4x.mongodb.net/whyte?retryWrites=true&w=majority"
mongoose
  .connect(
    "mongodb+srv://HueyWhyte:Famous10@whyte.wdm4x.mongodb.net/whyte?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 1437;
app.listen(port, () => console.log(`http://localhost:${port}`));
