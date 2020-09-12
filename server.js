const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./model/workout");
const seed = require("./seeders/seed");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");


const PORT = process.env.PORT || 3000;

// middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files
app.use(express.static("public"));
app.use("/", htmlRoutes);
app.use("/", apiRoutes);


app.listen(PORT, () => {
  console.log(`App is currently listening at http://localhost:${PORT}`);
});
