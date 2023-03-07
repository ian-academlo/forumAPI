const { Router } = require("express");
const {
  createAnswer,
  deleteAnswer,
} = require("../controllers/answer.controller");

const router = Router();

router.post("/api/v1/answers", createAnswer);

router.delete("/api/v1/answers/:id", deleteAnswer);

module.exports = router;
