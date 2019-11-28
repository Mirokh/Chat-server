'use strict';

module.exports = (sequelize, DataTypes) => {
    var Room = sequelize.define('Room', {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        timestamps: true,
        tableName: 'rooms',
    });

    Room.associate = function (models) {
        Room.belongsToMany(models.User, {
            through: 'UserRoom',
            as: 'users',
            foreignKey: 'room_id'
        });
    };

    return Room;
};