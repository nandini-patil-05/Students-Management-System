const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");

const app = express();

const adapter = new JSONFile("db.json");

const db = new Low(adapter, {
    users: [],
    students: []
});

async function loadDB() {
    await db.read();
}

loadDB();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false
}));

// REGISTER
app.post("/register", async (req, res) => {

    await db.read();

    const { name, email, password, role } = req.body;

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const user = {
        id: Date.now(),
        name,
        email,
        password: hashedPassword,
        role
    };

    db.data.users.push(user);

    await db.write();

    res.send("Registration Success");
});

// LOGIN
app.post("/login", async (req, res) => {

    await db.read();

    const { email, password } = req.body;

    const user = db.data.users.find(
        u => u.email === email
    );

    if (!user) {
        return res.send("User Not Found");
    }

    const match = await bcrypt.compare(
        password,
        user.password
    );

    if (!match) {
        return res.send("Wrong Password");
    }

    req.session.user = user;

    if (user.role === "admin") {
        res.redirect("/admin.html");
    } else {
        res.redirect("/dashboard.html");
    }
});

// ADD STUDENT
app.post("/add-student", async (req, res) => {

    await db.read();

    const { name, email, course, marks } = req.body;

    const student = {
        id: Date.now(),
        name,
        email,
        course,
        marks
    };

    db.data.students.push(student);

    await db.write();

    res.send("Student Added");
});

// GET STUDENTS
app.get("/students", async (req, res) => {

    await db.read();

    res.json(db.data.students);
});

// DELETE STUDENT
app.delete("/delete-student/:id",
async (req, res) => {

    await db.read();

    const id = Number(req.params.id);

    db.data.students =
        db.data.students.filter(
            student => student.id !== id
        );

    await db.write();

    res.send("Deleted");
});

// UPDATE STUDENT
app.put("/update-student/:id",
async (req, res) => {

    await db.read();

    const id = Number(req.params.id);

    const student =
        db.data.students.find(
            s => s.id === id
        );

    if (student) {

        student.name = req.body.name;
        student.email = req.body.email;
        student.course = req.body.course;
        student.marks = req.body.marks;

        await db.write();

        res.send("Updated");
    } else {
        res.send("Student Not Found");
    }
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});