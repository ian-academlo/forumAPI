const PostsServices = require("../services/post.services");

const getAllPosts = async (req, res) => {
  try {
    const posts = await PostsServices.getAll();
    res.json(posts);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getPostWithAnswers = async (req, res) => {
  try {
    const { postId } = req.params;
    const postWithAnswers = await PostsServices.postWithAnswers(postId);
    res.json(postWithAnswers);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = req.body;
    const post = await PostsServices.create(newPost);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllPosts,
  createPost,
  getPostWithAnswers,
};
