const { Router } = require("express");
const router = Router();

const Student = require("../models/Student");

router.get("/", (req, res) => {
  Student.find()
    .populate("room")
    .then((students) => res.send(students))
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.send(student))
    .catch((err) => res.send(err));
});

router.post("/new", (req, res) => {
  const { room, name, level } = req.body;

  Student.create({ room, name, level })
    .then((student) => res.send(student))
    .catch((err) => res.send(err));
});

router.put("/:id/update", (req, res) => {
  const { name, level } = req.body;

  Student.findById(req.params.id)
    .then((data) => {
      data.name = name;
      data.level = level;

      data
        .save()
        .then((student) => res.send(student))
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});
module.exports = router;
