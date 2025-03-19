const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const noteRouter = require("./routes/notesroutes");

const app = express();

// Middlewear
app.use(express.json());


// resource routers

app.use("/api/v1/notes", noteRouter);

module.exports = app;
