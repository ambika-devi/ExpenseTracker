const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("node-project", "root", "ambika284devi", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

