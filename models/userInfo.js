module.exports = function(sequelize, DataTypes){
    var UserInfo = sequelize.define('UserInfo', {
        location: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: false
        },
        Role: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: true
        },
        Bio: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: true
        },
    }, ({timestamps: false}) );

    UserInfo.associate = function(models){
    
        UserInfo.belongsTo(models.User, {
        foreignKey: {
            allowNull: false,
            onDelete: 'cascade'
          }
        })
      };

    return UserInfo;
}