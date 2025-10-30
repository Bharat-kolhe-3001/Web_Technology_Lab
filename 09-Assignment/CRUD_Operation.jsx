const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

// Middleware to parse JSON body data
app.use(express.json());

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Sample student data (in-memory)
let students = [
  { id: 1, name: "Bharat", age: 20 },
  { id: 2, name: "Tushar", age: 21 },
];

// ---------- Basic Routes ----------

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Student API Server!");
});

// Route to send simple JSON data
app.get("/info", (req, res) => {
  res.json({ message: "Node.js + Express server is running!" });
});

// ---------- RESTful API Routes ----------

// GET: Get all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// GET: Get a student by ID
app.get("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) res.json(student);
  else res.status(404).json({ message: "Student not found" });
});

// POST: Add a new student
app.post("/api/students", (req, res) => {
  const { name, age } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    age,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT: Update student by ID
app.put("/api/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// DELETE: Remove student by ID
app.delete("/api/students/:id", (req, res) => {
  const studentIndex = students.findIndex(
    (s) => s.id === parseInt(req.params.id)
  );
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    res.json({ message: "Student deleted successfully" });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
