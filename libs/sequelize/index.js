const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('node_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;