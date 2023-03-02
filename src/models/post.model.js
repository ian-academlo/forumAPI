const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Posts = db.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      // js usamos camelCase
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id", // SQL snake_case
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    createdAt: "posted_at",
  }
);

module.exports = Posts;
