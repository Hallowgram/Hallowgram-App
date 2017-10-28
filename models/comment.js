var Sequelize = require('sequelize');
var config = require(__dirname + '/../config/config.json').development;

var sequelize = new Sequelize(config.database, config.username, config.password, config);


var Comment = sequelize.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: "users",
        key: "id"
        }
    },
    picId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: "pics",
        key: "id"
        }
    },
    text: {
        allowNull: false,
        type: Sequelize.STRING
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

module.exports = Comment;


