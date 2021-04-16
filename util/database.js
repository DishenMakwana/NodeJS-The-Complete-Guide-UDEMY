const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Dishen@87', {
	dialect: 'mysql',
	host: 'localhost',
});

module.exports = sequelize;
