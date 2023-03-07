const { Router } = require("express");
const {
  getAllPosts,
  createPost,
  getPostWithAnswers,
} = require("../controllers/post.controllers");

const router = Router();

router.get("/api/v1/posts", getAllPosts);

router.get("/api/v1/posts/:postId/answers", getPostWithAnswers);

router.post("/api/v1/posts", createPost);

module.exports = router;
