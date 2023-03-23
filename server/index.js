const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const FormModel = require("./models/form");
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/formDB");

// Firstly connect your MongoDB with local Machine 

app.post("/adduser", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const date = req.body.date;
  const user = new FormModel({
    name: name,
    email: email,
    phone: phone,
    date: date,
  });
  await user.save();
  res.send("inserted successfully");
});

app.listen(3001, () => {
  console.log("Server started at port 3001");
});
