const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const tipoCerveja = database.define("tipoCerveja", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  }

},
{
  freezeTableName: true,
  timestamps: false, 
  createdAt: false,
  updatedAt: false
});

module.exports = tipoCerveja;