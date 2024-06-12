import mongoose from "mongoose";
mongoose.set("strictQuery", true);

// Define schema
const studentSchema = new mongoose.Schema({
  name: [
    {
      first: { type: "string", required: true, trim: true },
      last: { type: "string", required: true, trim: true },
    },
  ],
  parent: [
    {
      mother: { type: "string", required: true, trim: true },
      father: { type: "string", required: true, trim: true },
    },
  ],
});

// Creating model instances
const studentModel = mongoose.model("students", studentSchema);

// Create model
const createStudent = async () => {
  const studentData = {
    name: { first: "John", last: "Doe" },
    parent: { mother: "Jane Doe", father: "Joe Doe" },
  };

  try {
    const newStudent = new studentModel(studentData);
    await newStudent.save();
    console.log("Student created successfully:", newStudent);
  } catch (error) {
    console.error("Error creating student:", error);
  }
};

export { createStudent };

// const dbConfig = require("../config/db.config.js");

// mongoose.Promise = global.Promise;

// const db = {};
// db.mongoose = mongoose;
// db.url = dbConfig.url;
// db.students = require("./tutorial.model.js")(mongoose);

// module.exports = db;
