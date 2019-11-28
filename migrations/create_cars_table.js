module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('cars', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            model: Sequelize.STRING,
            make_id: Sequelize.INTEGER,
            year: Sequelize.INTEGER,
            updatedAt: Sequelize.DATE,
            createdAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('cars');
    }
};