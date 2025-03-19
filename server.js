const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app.js");

// Databse connection or initialization, whatever!
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// DB connection with mongoose

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((connectionobj) => {
    console.log("App connected to the databse successfully!");
  });

// Databse schema. Single collection is needed for this project
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed, // Allows any type of data
  },
});

// Notes Model/ Collection in our databse, based on the notes schema
const Note = mongoose.model("Note", noteSchema);

// Notes instance / Dcouments in our collection.

const note = new Note({
  title: "My first Note!",
});

// save newly created document to the database
note
  .save()
  .then((doc) => {
    console.log(doc);
    console.log(`Saved to database successfully!`);
  })
  .catch((err) => {
    console.log(`Error, ${err}`);
  });

// Start the server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

