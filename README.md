# Student Management System

A web-based Student Management System built using Node.js, Express.js, LowDB, bcryptjs, and Express Session. The application provides secure user authentication and allows administrators to manage student records through CRUD operations.

# Features
- User Registration and Login
- Secure Password Hashing using bcryptjs
- Session-Based Authentication
- Role-Based Access Control (Admin/User)
- Add Student Records
- View Student Records
- Update Student Details
- Delete Student Records
- JSON Database Storage using LowDB
- 
# Technologies Used
- Node.js
- Express.js
- Express Session
- bcryptjs
- LowDB
- HTML
- CSS
- JavaScript

# Project Structure
Students-Management-System/
│
├── public/
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   ├── admin.html
│   └── style.css
│
├── server.js
├── db.json
├── package.json
└── package-lock.json

# Installation & Setup
- Clone the Repository
- git clone https://github.com/nandini-patil-05/Students-Management-System.git
- Navigate to Project Folder
- cd Students-Management-System
- Install Dependencies
- npm install
- Start the Server
- node server.js
- Open in Browser
- http://localhost:3000/register.html

# Student Information Stored
Student ID
Name
Email
Course
Marks

# Authentication Flow
1.User registers an account.
2.Password is encrypted using bcryptjs.
3.User logs in with credentials.
4.Session is created after successful login.
5.Admin can manage student records.

# CRUD Operations
1.Create Student
2.Read Student
3.Update Student
4.Delete Student

# Learning Outcomes
- Backend Development with Node.js and Express.js
- User Authentication and Session Management
- Password Security using bcryptjs
- REST API Development
- CRUD Operations
- JSON Database Management using LowDB

# Future Enhancements
- MongoDB Integration
- Search and Filter Students
- Attendance Management
- Result Management
- Student Performance Analytics
- Report Generation

# Author
Nandini Patil

# GitHub Repository:
Students Management System
