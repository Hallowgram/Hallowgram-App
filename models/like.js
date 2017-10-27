

module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define('likes', {
        userId: DataTypes.INTEGER,
		picId: DataTypes.INTEGER,
		firstname: DataTypes.STRING,
		lastname: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return Like;
};