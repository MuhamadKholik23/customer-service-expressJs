const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define(
  "Customer",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kota: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "customer",
    timestamps: false,
  }
);

module.exports = Customer;
