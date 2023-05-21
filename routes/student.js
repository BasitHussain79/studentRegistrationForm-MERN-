const express = require("express");
const {
  createStudent,
  getStudents,
  deleteStudent,
} = require("../controller/student");

const router = express.Router();

// create a student
router.post("/", createStudent);

// get all students
router.get("/", getStudents);

// // delete a student
router.delete("/:id", deleteStudent);

module.exports = router;
