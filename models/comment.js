module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('comments', {
        text: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });
    Comment.associate = function(models) {
                Comment.belongsTo(models.users); 
                Comment.belongsTo(models.pics); 
            
    };
    return Comment;
};