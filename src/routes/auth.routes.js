const { Router } = require("express");
const { userLogin } = require("../controllers/auth.controllers");

const router = Router();

router.post("/api/v1/auth/login", userLogin);

module.exports = router;
