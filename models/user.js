module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('users', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING
    });
    User.associate = function(models) {
        User.hasMany(models.comments);
        User.hasMany(models.pics);

    };

    return User;
};