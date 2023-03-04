const { Router } = require("express");
const { createAnswer } = require("../controllers/answer.controller");

const router = Router();

router.post("/api/v1/answers", createAnswer);

module.exports = router;
