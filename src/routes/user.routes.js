const { Router } = require("express");
const Posts = require("../models/post.model");
const Users = require("../models/user.models");

// TODO obtener a un usuario con sus publicaciones
// * SELECT * FROM users JOIN posts ON users.id=posts.author WHERE users.id=1;

// TODO Incluir el nombre de la categoria en la respuesta
/* 
  {
    "username": "iannacus",
    "posts": [
        {
            "title": "Dudas con Sequelize"
            category: {
              name: "Tecnologia"
            }
        }
    ]
}
*/

const router = Router();

router.get("/api/v1/users/:id/posts", async (req, res) => {
  try {
    const { id } = req.params;
    const userPosts = await Users.findByPk(id, {
      attributes: ["username"],
      include: {
        model: Posts,
        attributes: ["title", "category_id"],
      },
    });
    res.json(userPosts);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
