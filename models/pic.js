module.exports = function(sequelize, DataTypes) {
    var Pic = sequelize.define('pics', {
        userId: DataTypes.INTEGER,
		url: DataTypes.STRING
    });
    
    Pic.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
        Pic.belongsTo(models.users, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }});
    }

    return Pic;
};

