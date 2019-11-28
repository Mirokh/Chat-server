module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('text_messages', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            room_id: Sequelize.INTEGER,
            author_id: Sequelize.INTEGER,
            text: Sequelize.TEXT,
            updatedAt: Sequelize.DATE,
            createdAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('text_messages');
    }
};