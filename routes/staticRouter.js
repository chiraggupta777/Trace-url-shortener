const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/terms", (req, res) => {
  res.render("terms");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = router;
