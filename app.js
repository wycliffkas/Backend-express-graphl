const express = require("express");
const feedRoutes = require("./routes/feed");

const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded()) //parsing form data

app.use(bodyParser.json()); //to parse json data

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Contorl-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.listen(8080);
