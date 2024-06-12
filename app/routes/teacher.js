import express from "express";
const router = express.Router();

// Retrieve all teachers
router.get("/all", (req, res) => {
  // Logic to get all teachers
  res.send("All teachers");
});

// Create a new Teacher
router.post("/teachers", (req, res) => {
  // Logic to create a new Teacher
  res.send("Teacher created");
});

// Retrieve a single Teacher with id
router.get("/teacher/:id", (req, res) => {
  // Logic to get a single Teacher by id
  res.send(`Teacher with id ${req.params.id}`);
});

// Update a Teacher with id
router.put("/teachers/:id", (req, res) => {
  // Logic to update a Teacher by id
  res.send(`Teacher with id ${req.params.id} updated`);
});

// Delete a Teacher with id
router.delete("/teachers/:id", (req, res) => {
  // Logic to delete a Teacher by id
  res.send(`Teachers with id ${req.params.id} deleted`);
});

export default router;
