module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define('likes', {
        userId: DataTypes.INTEGER,
        picId: DataTypes.INTEGER,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING
    });

    Like.associate = function(models) {
        Like.belongsTo(models.users);
        Like.belongsTo(models.pics);

    };
    return Like;

};