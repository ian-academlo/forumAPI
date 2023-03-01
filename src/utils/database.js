const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "forum_db",
  host: "localhost",
  port: 5432,
  username: "iannacus",
  password: "root",
  dialect: "postgres",
});

module.exports = db;
