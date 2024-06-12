import express from "express";
// import {studentModel} from "./app/models/Students.js";
import { createStudent } from "./app/models/Students.js";
import students from "./app/routes/student.js";
import teachers from "./app/routes/teacher.js";
import connectDB from "./connectDB.js";
const app = express();
const DATABASE_URL =
  process.env.DATABASE_URL ||
  "mongodb+srv://admin:admin123@studentdb.jzyodlt.mongodb.net/?retryWrites=true&w=majority&appName=StudentDB";
connectDB(DATABASE_URL);

app.use("/students", students);
app.use("/teachers", teachers);

const port = process.env.PORT;
createStudent();
app.listen(port, () => console.log("Server is up"));
