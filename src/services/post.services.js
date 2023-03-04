const Posts = require("../models/post.model");

class PostsServices {
  static async create(newPost) {
    try {
      const result = await Posts.create(newPost);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PostsServices;
