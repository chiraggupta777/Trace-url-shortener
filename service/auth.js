const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

if (!secretKey) {
  throw new Error("JWT_SECRET environment variable is required");
}
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secretKey,
  );
}

function getUser(token) {
  if (!token) {
    return null;
  }
  return jwt.verify(token, secretKey);
}

module.exports = { setUser, getUser };
