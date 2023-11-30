const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("victoria", "postgres", "Juns070200", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
