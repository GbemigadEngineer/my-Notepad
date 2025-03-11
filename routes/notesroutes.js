const express = require("express");
const noteController = require("../controllers/notescontrollers");
const router = express.Router();

// routes

router
  .route("/")
  .get(noteController.getAllNotes)
  .post(noteController.createNote)
  .delete(noteController.deleteAllNotes);

router
  .route("/:id")
  .get(noteController.getNotebyId)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);

module.exports = router;
