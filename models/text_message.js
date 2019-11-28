'use strict';

module.exports = (sequelize, DataTypes) => {
    var TextMessage = sequelize.define('TextMessage', {
        room_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        source: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        timestamps: true,
        tableName: 'text_messages'
    });

    return TextMessage;
};