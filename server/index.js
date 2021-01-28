const express = require("express");
const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "salon1";

mongoose
  .connect(`mongodb://${server}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const app = express();

app.listen(8000, () => console.log("Server running on port 8000"));
