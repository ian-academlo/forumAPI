const { Router } = require("express");
const {
  getAllPosts,
  createPost,
  getPostWithAnswers,
  updatePost,
} = require("../controllers/post.controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.get("/api/v1/posts", authenticate, getAllPosts);
router.get("/api/v1/posts/:postId/answers", getPostWithAnswers);
router.post("/api/v1/posts", createPost);
router.put("/api/v1/posts/:id", updatePost);

module.exports = router;

// TODO proteger la contraseña cuando se crea un usuario
// ! 030790
// * 90% de las personas usan la misma contraseña en todas las aplicaciones
// * encriptadas - hashear

// TODO login
