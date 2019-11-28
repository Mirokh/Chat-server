const sequelize = require('@lib/sequelize');
const Sequelize = require('sequelize');

const accessToken = sequelize.define('access_tokens', {
    user_id: {
        type: Sequelize.INTEGER,
    },
    client_id: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    scopes: {
        type: Sequelize.TEXT
    },
    revoked: Sequelize.TINYINT,
    expires_at: {
        type: Sequelize.INTEGER,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
    createdAt: {
        type: Sequelize.DATE,
    }
});

module.exports = accessToken;