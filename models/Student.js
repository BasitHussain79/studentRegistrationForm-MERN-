const mongoose = require("mongoose");

const stdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Student name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    field: {
      type: String,
      required: [true, "Field is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", stdSchema);
