module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('makes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: Sequelize.STRING,
            updatedAt: Sequelize.DATE,
            createdAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('makes');
    }
}