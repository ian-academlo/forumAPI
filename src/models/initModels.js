const Users = require("./user.models");
const Posts = require("./post.model");
const Categories = require("./category.models");

const initModels = () => {
  // TODO relacion entre Users y Posts
  // * BelongsTo
  // * hasMany

  Users.hasMany(Posts, { foreignKey: "author" });
  Posts.belongsTo(Users, { foreignKey: "author" });

  // * Post - Categories
  Categories.hasMany(Posts, { foreignKey: "categoryId" });
  Posts.belongsTo(Categories, { foreignKey: "categoryId" });
};

module.exports = initModels;
