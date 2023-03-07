const { Router } = require("express");
const {
  getAllPosts,
  createPost,
  getPostWithAnswers,
  updatePost,
} = require("../controllers/post.controllers");

const router = Router();

router.get("/api/v1/posts", getAllPosts);
router.get("/api/v1/posts/:postId/answers", getPostWithAnswers);
router.post("/api/v1/posts", createPost);
router.put("/api/v1/posts/:id", updatePost);

module.exports = router;
