const { getUser } = require("../service/auth");
const User = require("../models/users");

async function checkforAuth(req, res, next) {
  const tokencookie = req.cookies?.token;

  if (!tokencookie) {
    req.user = null;
    return next();
  }
  let decodedUser;
  try {
    decodedUser = getUser(tokencookie);
  } catch {
    req.user = null;
    return next();
  }

  if (!decodedUser?._id) {
    req.user = null;
    return next();
  }

  const currentUser = await User.findById(decodedUser._id).select("role");
  req.user = currentUser ? { ...decodedUser, role: currentUser.role } : null;
  next();
}
function restrictAccess(roles) {
  return function (req, res, next) {
    if (!req.user) {
      return res.status(401).send("Unauthorized");
    }
    const userRole =
      typeof req.user.role === "string" ? req.user.role.toLowerCase() : "";
    const allowedRoles = roles?.map((role) =>
      typeof role === "string" ? role.toLowerCase() : "",
    );
    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return res.status(403).send("Unauthorized Access");
    }
    next();
  };
}

module.exports = {
  checkforAuth,
  restrictAccess,
};
