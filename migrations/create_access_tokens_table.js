module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('access_tokens', {
            id: {
                type: Sequelize.STRING,
                primaryKey: true,
                autoIncrement: false
            },
            user_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
            },
            client_id: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: true,
                type: Sequelize.STRING
            },
            scopes: {
                allowNull: true,
                type: Sequelize.TEXT
            },
            revoked: Sequelize.TINYINT,
            expires_at: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('access_tokens');
    }
};