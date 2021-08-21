const express = require("express");
const User = require("../models/User");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

// GET any user can access  to "me" page once login.
router.get("/me", requireAuth, (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

// GET user can modify password
router.get("/profile", requireAuth, (req, res, netx) => {
  User.findById(req.session.currentUser._id)
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch(next);
});

module.exports = router;
