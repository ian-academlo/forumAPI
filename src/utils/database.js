const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
