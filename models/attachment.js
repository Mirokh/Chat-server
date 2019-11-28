'use strict';

module.exports = (sequelize, DataTypes) => {
    var Attachment = sequelize.define('Attachment', {
        room_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        path: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mime_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: true});

    return Attachment;
};