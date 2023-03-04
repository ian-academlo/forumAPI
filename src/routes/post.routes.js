const { Router } = require("express");
const { createPost } = require("../controllers/post.controllers");

const router = Router();

router.post("/api/v1/posts", createPost);

module.exports = router;
