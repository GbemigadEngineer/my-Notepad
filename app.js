const express = require("express");

const noteRouter = require("./routes/notesroutes")
const app = express();






app.use(express.json())

// resource routers

app.use("/api/v1/notes", noteRouter)

module.exports = app

