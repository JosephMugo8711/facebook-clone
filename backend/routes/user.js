const express = require("express");
const { home } = require("../controllers/user");

const router = express.Router();

// GET request to fetch all users
router.get("/user", home)

module.exports = router;