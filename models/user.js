module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING
<<<<<<< 137ac917aa9ea78091741544159c9d20b6dcd107

=======
        // createdAt: DataTypes.DATE,
        // updatedAt: DataTypes.DATE
>>>>>>> added email to passpport.js
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return User;
};