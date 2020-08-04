// Import npm packages and dependencies
const express = require("express");
const mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://malneyungfl:nguyen05041989@ds263307.mlab.com:63307/heroku_h2wdsrbn"


// Create PORT and assign to a variable.
const PORT = process.env.PORT || 3000;

// const db = require("./models");
const app = express();

// Use express Middleware ( urlEncoded, json and static ).
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to Mongo Db.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Import your routes (API and HTML Routes).
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// create code to start the server and listen to requests.
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });


