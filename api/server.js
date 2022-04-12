const express = require("express");
const User = require("./users/model");
const server = express();

// server.post("/api/users", (req, res) => {
//   let addUser = req.body;
//   User.create(addUser).then((addUser) => {
//     res.status(201).json(addUser);
//   });
// });

server.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: "The users information could not be retrieved",
        err: err.message,
        stack: err.stack,
      });
    });
});

server.get("/api/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.status(404).json({
          message: "The user with the specified ID does not exist",
        });
      }
      res.json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: "The users information could not be retrieved",
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

module.exports = server; // EXPORT YOUR SERVER instead of {}
