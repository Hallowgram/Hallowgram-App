var Sequelize = require('sequelize');
var config = require(__dirname + '/../config/config.json').development;

var sequelize = new Sequelize(config.database, config.username, config.password, config);


var Pic = sequelize.define('pics',{
	userId: Sequelize.INTEGER,
	url: Sequelize.STRING,
	firstname: Sequelize.STRING,
	lastname: Sequelize.STRING
});

Pic.sync()

module.exports = Pic;