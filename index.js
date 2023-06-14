const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT || 6969, () => {
  console.log("Backend Server is running");
});
