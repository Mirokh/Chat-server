module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('attachments', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            room_id: Sequelize.INTEGER,
            author_id: Sequelize.INTEGER,
            path: Sequelize.TEXT,
            mime_type: Sequelize.STRING,
            updatedAt: Sequelize.DATE,
            createdAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('attachments');
    }
};