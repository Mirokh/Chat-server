'use strict';

module.exports = (sequelize, DataTypes) => {
    var UserRoom = sequelize.define('UserRoom', {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            room_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            last_seen: {
                type: DataTypes.DATE,
                allowNull: true
            },
            has_unread: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
            is_blocked: {
                type: DataTypes.TINYINT,
                allowNull: false
            },
        }, {
            timestamps: false,
            tableName: 'pivot_user_room',
        },
    );

    return UserRoom;
};