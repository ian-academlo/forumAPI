const Users = require("./user.models");
const Posts = require("./post.model");
const Categories = require("./category.models");
const Answers = require("./answer.models");

const initModels = () => {
  // TODO relacion entre Users y Posts
  // * BelongsTo
  // * hasMany

  Users.hasMany(Posts, { foreignKey: "author" });
  Posts.belongsTo(Users, { foreignKey: "author" });

  // * Post - Categories
  Categories.hasMany(Posts, { foreignKey: "categoryId" });
  Posts.belongsTo(Categories, { foreignKey: "categoryId" });

  // * users - Answers
  Users.hasMany(Answers, { foreignKey: "author" });
  Answers.belongsTo(Users, { foreignKey: "author" });

  // * Anwers - Posts
  Posts.hasMany(Answers, { foreignKey: "postId" });
  Answers.belongsTo(Posts, { foreignKey: "postId" });
};

module.exports = initModels;
