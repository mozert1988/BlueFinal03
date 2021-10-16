const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const cervejaria = database.define("cervejaria", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  historia: Sequelize.STRING,
  pais: Sequelize.STRING,
  logo: {
    type: Sequelize.STRING,
    allowNull: false,
  }
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: true,
  updatedAt: true
});

module.exports = cervejaria;