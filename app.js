//import all required packages
const express = require("express");
const app = express();
const port = 9000;
const db = require("./config/mongoose");

//middleware for parsing data into url encoded format
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
//route handler
const routes = require("./routes/tasks");
app.use("/", routes);

//set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//start the server
app.listen(port, (err) => {
  if (err) {
    console.log("Server Error", err);
  }
  console.log(`Server running on port ${port}`);
});
