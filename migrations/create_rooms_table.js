module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('rooms', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            author_id: Sequelize.INTEGER,
            type: Sequelize.STRING,
            title: Sequelize.STRING,
            image: Sequelize.TEXT,
            updatedAt: Sequelize.DATE,
            createdAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('rooms');
    }
};