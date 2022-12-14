const express = require("express");
const router = express.Router();
const registerCtrl = require("../controller/register");
const { signToken, check } = require("../middleware/jwtAuth");


// GET route for reading data
router.get("/register", registerCtrl.getRegister);

//POST route for signup/registration
router.post("/register", registerCtrl.postRegister);

// GET for login
router.get("/login", check, registerCtrl.getLogin);

// POST for login
router.post("/login", signToken, registerCtrl.postLogin);

// GET for logout
router.get("/logout", check, registerCtrl.getLogout);

module.exports = router;