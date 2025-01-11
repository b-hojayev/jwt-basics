const express = require("express");
const router = express.Router();

const { dashboard, login } = require("../controllers/main");

router.get("/dashboard", dashboard);
router.post("/login", login);

module.exports = router;
