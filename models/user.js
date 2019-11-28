'use strict';

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'users'
    });

    User.associate = function (models) {
        User.belongsToMany(models.Room, {
            through: 'UserRoom',
            as: 'rooms',
            foreignKey: 'user_id'
        });
    };

    return User;
};