const express = require("express");
const { renderDashboard } = require("../controllers/dashboard");

const router = express.Router();

router.get("/", renderDashboard);

module.exports = router;
