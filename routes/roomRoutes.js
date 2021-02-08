const { Router } = require("express");

const Room = require("../models/Room");
const Student = require("../models/Student");
const router = Router();

router.get("/", (req, res) => {
  Room.find()
    .then((rooms) => {
      res.send(rooms);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  Room.findById(req.params.id)
    .then((room) => res.send(room))
    .catch((err) => res.send(err));
});

router.get("/students/:id", (req, res) => {
  Student.find({ room: req.params.id })
    .then((students) => res.send(students))
    .catch((err) => res.send(err));
});

router.post("/new", (req, res) => {
  const { number } = req.body;

  Room.create({ number })
    .then((room) => res.send(room))
    .catch((err) => res.send(err));
});

router.put("/:id/update", (req, res) => {
  const { number } = req.body;

  Room.findById(req.params.id)
    .then((data) => {
      data.number = number;

      data
        .save()
        .then((room) => res.send(room))
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});
module.exports = router;
