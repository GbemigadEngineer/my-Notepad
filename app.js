const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const noteRouter = require("./routes/notesroutes");

const app = express();

// Middlewear
app.use(cors()) // Allow frontend to access API
app.use(express.json()); // JSON request body parsing


// resource routers

app.use("/api/v1/notes", noteRouter);

module.exports = app;
