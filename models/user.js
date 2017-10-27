// var Sequelize = require('sequelize');
// var config = require(__dirname + '/../config/config.json').development;

// var sequelize = new Sequelize(config.database, config.username, config.password, config);


// var User = sequelize.define('user', {
//   id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//   },
//       firstname: {
//         allowNull: false,
//         type: Sequelize.STRING
//   },
//   lastname: {
//         allowNull: false,
//         type: Sequelize.STRING
//   },
//   username: {
//         allowNull: false,
//         type: Sequelize.STRING
//   },
//   email: {
//         allowNull: false,
//         type: Sequelize.STRING
//   },
//   password: {
//         allowNull: false,
//         type: Sequelize.STRING
//   },
//   createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//   },
//   updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//   }
// }, {
//     timestamps: false
// });

// module.exports = User;

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return User;
};