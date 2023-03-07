const Posts = require("../models/post.model");
const Answers = require("../models/answer.models");
const Categories = require("../models/category.models");
const Users = require("../models/user.models");

class PostsServices {
  static async getAll() {
    try {
      const result = await Posts.findAll({
        attributes: { exclude: ["description", "author", "categoryId"] },
        include: [
          {
            model: Users,
            attributes: ["username"],
          },
          {
            model: Categories,
            attributes: ["name"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newPost) {
    try {
      const result = await Posts.create(newPost);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async postWithAnswers(postId) {
    try {
      const result = await Posts.findByPk(postId, {
        attributes: { exclude: ["categoryId", "author"] },
        include: [
          {
            model: Users,
            attributes: ["username"],
          },
          {
            model: Categories,
            attributes: ["name"],
          },
          {
            model: Answers,
            include: {
              model: Users,
              attributes: ["username"],
            },
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PostsServices;
