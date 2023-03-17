const PostsServices = require("../services/post.services");

const getAllPosts = async (req, res, next) => {
  try {
    const { categoryId } = req.query;
    const posts = await PostsServices.getAll(categoryId);
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostWithAnswers = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const postWithAnswers = await PostsServices.postWithAnswers(postId);
    res.json(postWithAnswers);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const newPost = req.body;
    const post = await PostsServices.create(newPost);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    // obtenemos el id de los params
    const { id } = req.params;
    const newData = req.body;
    await PostsServices.update(newData, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllPosts,
  getPostWithAnswers,
  createPost,
  updatePost,
};
