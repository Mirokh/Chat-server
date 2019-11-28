module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            email: Sequelize.STRING,
            phone_number: Sequelize.INTEGER,
            password: Sequelize.STRING,
            verified_at: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            updatedAt: Sequelize.DATE,
            createdAt: Sequelize.DATE
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};