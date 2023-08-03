const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./db/dbConnection");
const User = require("./db/user");

const app = express();

//middleware for parsing json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//enable cors
app.use(
  cors({
    origin: ["https://connecthubz.netlify.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("welcome to connectHubz...!");
});

//registration
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json("Already have an account");
      } else {
        User.create({ name: name, email: email, password: password })
          .then((result) => res.json("Account created"))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

//login

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "login successfully", name: user.name });
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No record exist");
    }
  });
});

app.get("/users", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

connectDB();

app.listen(3000, () => {
  console.log("server is running on pot 3000");
});
