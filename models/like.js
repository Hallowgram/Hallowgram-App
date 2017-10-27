var Sequelize = require('sequelize');
var config = require(__dirname + '/../config/config.json').development;

var sequelize = new Sequelize(config.database, config.username, config.password, config);


var Like = sequelize.define('likes',{
	userId: Sequelize.INTEGER,
	picId: Sequelize.INTEGER,
	firstname: Sequelize.STRING,
	lastname: Sequelize.STRING
});

module.exports = Like;