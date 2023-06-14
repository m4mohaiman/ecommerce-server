const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js")

dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json())

app.listen(process.env.PORT || 6969, () => {
  console.log("Backend Server is running");
});


app.use("/", userRoute)