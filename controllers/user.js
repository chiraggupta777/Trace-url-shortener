const User = require("../models/users");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function CreateUser(req, res) {
  const { name, email, password } = req.body;
  await User.create({ name, email, password });
  return res.redirect("/login");
}

async function LoginUser(req, res) {
  const { email, password } = req.body || {};
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).render("login", { error: "Invalid credentials" });
  }

  const token = setUser({ _id: user._id, role: user.role });
  res.cookie("token", token);
  return res.redirect("/");
}
module.exports = { CreateUser, LoginUser };
