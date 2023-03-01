const Users = require("./user.models");
const Posts = require("./post.model");

const initModels = () => {
  // TODO relacion entre Users y Posts
  // * BelongsTo
  // * hasMany

  Users.hasMany(Posts, { foreignKey: "author" });
  Posts.belongsTo(Users, { foreignKey: "author" });
};

module.exports = initModels;
