module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define('likes', {
    });

    Like.associate = function(models) {
        Like.belongsTo(models.users);
        Like.belongsTo(models.pics);

    };
    return Like;

};