const express = require("express");
const noteController = require("../controllers/notescontrollers");
const router = express.Router();

// routes

router
  .route("/")
  .get(noteController.getAllNotes)
  .post(noteController.createNote);

router
  .route("/:id")
  .get(noteController.getNoteById)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);

router.route("/:id/favourite").patch(noteController.favouriteNote);

module.exports = router;
