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