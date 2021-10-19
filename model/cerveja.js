const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const cerveja = database.sequelize.define("cerveja", {
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
  descricao: Sequelize.STRING,
  teor_alcoolico: Sequelize.STRING,
  imagem: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tipocerveja_id: Sequelize.INTEGER,
  cervejaria_id: Sequelize.INTEGER,
},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: true,
  updatedAt: true
});

module.exports = cerveja;