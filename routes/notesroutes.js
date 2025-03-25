const express = require("express");
const noteController = require("../controllers/notescontrollers");
const router = express.Router();

// routes

router
  .route("/")
  .get(noteController.getAllNotes)
  .post(noteController.createNote)

router.route("/favourites").get(noteController.getAllFavouriteNotes);

router.route("/:id/favourite").patch(noteController.favouriteNote);
router
  .route("/:id")
  .get(noteController.getNoteById)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);






module.exports = router;
