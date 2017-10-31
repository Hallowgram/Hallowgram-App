module.exports = function(sequelize, DataTypes) {
    var Pic = sequelize.define('pics', {
		url: DataTypes.STRING,
		name: DataTypes.STRING,
		description: DataTypes.STRING

    });

    Pic.associate = function(models) {
    
        Pic.belongsTo(models.users, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }});
          
          Pic.hasMany(models.likes);
    }

    return Pic;
};