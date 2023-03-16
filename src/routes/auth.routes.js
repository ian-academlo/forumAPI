const { Router } = require("express");
const { userLogin, verifyEmail } = require("../controllers/auth.controllers");

const router = Router();

router.post("/api/v1/auth/login", userLogin);

router.post("/api/v1/auth/verify", verifyEmail);

module.exports = router;
