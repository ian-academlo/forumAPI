const PostsServices = require("../services/post.services");

const getAllPosts = async (req, res, next) => {
  // TODO limit -> cantidad maxima de elementos que lleva la respuesta
  // * 1000 - limit = 15 -> responder 15 elementos
  // ! 10 - limit = 17 -> responder 10 elementos

  // TODO offset -> cantidad de elementos que se ignoran de el total de elementos
  // * 50 elementos - offset 5 -> responder 45 elementos iniciando desde el 6
  // ? [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, ...rest]
  // ! 50 - offset 65 -> responde 0 y desde donde inicia desde ningun elemento por que no hay
  try {
    console.log(req.query);
    const { categoryId, offset, limit } = req.query;
    const posts = await PostsServices.getAll(categoryId, offset, limit);
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
