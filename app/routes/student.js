import express from "express";

import {
  allStudents,
  newStudent,
  deleteStudent,
  updateStudent,
} from "../controllers/student.js";

const router = express.Router();

// Retrieve all Students
router.get("/all", allStudents);

// Create a new Student
router.post("/create", newStudent);

// Retrieve a single Student with id
// router.get("/students/:id", );

// Update a Student with id
router.put("/update", updateStudent);

// Delete a Student with id
router.delete("/delete", deleteStudent);

export default router;
