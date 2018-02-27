module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        id: { 
            autoIncrement: true,
             primaryKey: true, 
             type: DataTypes.INTEGER
         },
        First_Name: { 
            type: DataTypes.STRING,
            notEmpty: true
        },
        Last_Name: { 
            type: DataTypes.STRING,
            notEmpty: true
        },
        Password : {
            type: DataTypes.STRING,
            allowNull: false 
        },
        Location: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        Bio: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue:''
        },
       },({timestamps: true}) 
    );

    return User;
};