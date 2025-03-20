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
  }) .catch((err) => console.error("Database connection failed:", err));



 


// Start the server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// close the database connection when the server is stopped

process.on("SIGINT", async ()=>{
  try{
    console.log("Closing databse connection....")
    await mongoose.connection.close() //Close the DB connection
    console.log("Database connection closed. Server is shutting down!")
    
  } catch (error){
    console.error("Error closing database connection", error)
  }

  process.exit(0)
})