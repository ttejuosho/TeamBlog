module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        id: { 
            autoIncrement: true,
             primaryKey: true, 
             type: DataTypes.INTEGER
         },
        firstname: { 
            type: DataTypes.STRING,
            notEmpty: true
        },
        lastname: { 
            type: DataTypes.STRING,
            notEmpty: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false 
        },
       },({timestamps: true}) 
    )

    User.associate = function(models) {
        User.hasOne(models.userInfo, {
            onDelete: 'cascade'
        });
    };

    return User;
};