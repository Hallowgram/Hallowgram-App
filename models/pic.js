
module.exports = function(sequelize, DataTypes) {
    var Pic = sequelize.define('pics', {
        userId: DataTypes.INTEGER,
		url: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {

            }
        }
    });

    return Pic;
};
