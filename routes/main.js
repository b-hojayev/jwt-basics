const express = require("express");
const router = express.Router();

const { dashboard, login } = require("../controllers/main");
const authenticationMiddleware = require("../middleware/auth");

router.get("/dashboard", authenticationMiddleware, dashboard);
router.post("/login", login);

module.exports = router;
