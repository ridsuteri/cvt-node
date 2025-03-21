const express = require('express')
const { showUserDetails, addUserDetails } = require("../controllers/userController");
const router = express.Router()

router.get("/", showUserDetails);

router.get("/:id", showUserDetails);

router.post("/", addUserDetails);

module.exports = router;