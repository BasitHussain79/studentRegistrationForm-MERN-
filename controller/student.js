const Student = require("../models/Student");

const createStudent = async (req, res, next) => {
  try {
    const { name, email, age, field } = req.body;
    if (!name) {
      res.status(400);
      return next(new Error("Name is required"));
    }

    if (!email) {
      res.status(400);
      return next(new Error("Email is required"));
    }

    if (!age) {
      res.status(400);
      return next(new Error("Age is required"));
    }

    if (!field) {
      res.status(400);
      return next(new Error("Field is required"));
    }

    // check if student already exists
    const isStudentExists = await Student.findOne({ email });

    if (isStudentExists) {
      res.status(404);
      return next(new Error("Student already exists"));
    }

    const student = await Student.create({
      name,
      email,
      age,
      field,
    });

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      success: true,
      students,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async (req, res, next) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);

    if (!student) {
      res.status(404);
      return next(new Error("Student not found"));
    }

    await Student.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Student has been deleted.",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getStudents,
  createStudent,
  deleteStudent,
};
