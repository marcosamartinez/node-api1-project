const express = require("express");
const User = require("./users/model");
const server = express();

server.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      throw new Error("arghhh!!!!!");
    })
    .catch((err) => {
      res.status(500).json({
        message: "Users not found",
        err: err.message,
        stack: err.stack,
      });
    });
});

server.use("*", (req, res) => {
  res.status(404).json({
    message: "not found",
  });
});

// server.post("./api/users", (req, res) => {
//   let addUser = req.body;
//   Users.create(addUser).then((addUser) => {
//     res.status(201).json(addUser);
//   });
// });

module.exports = server; // EXPORT YOUR SERVER instead of {}
