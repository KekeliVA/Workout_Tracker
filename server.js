const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./model/workout");

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkoutSchema", {useNewUrlParser: true});

// middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App is currently listening at http://localhost:${PORT}`);
});
