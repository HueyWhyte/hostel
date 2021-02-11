const { Router } = require("express");

const Complaint = require("../models/Complaint");

const router = Router();

router.get("/", (req, res) => {
  Complaint.find()
    .sort("-timestamp")
    .populate("room")
    .populate("student")
    .then((complaint) => res.send(complaint))
    .catch((err) => res.send(err));
});

router.post("/new", (req, res) => {
  const { room, student, subject, description } = req.body;

  Complaint.create({ room, student, subject, description })
    .then((complaint) => res.send(complaint))
    .catch((err) => res.send(err));
});

router.put("/:id/resolve", (req, res) => {
  Complaint.findById(req.params.id)
    .then((data) => {
      data.resolved = true;
      data
        .save()
        .then((complaint) => res.send(complaint))
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});

module.exports = router;
