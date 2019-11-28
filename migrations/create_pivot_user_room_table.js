module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pivot_user_room', {
            user_id: Sequelize.INTEGER,
            room_id: Sequelize.INTEGER,
            last_seen: Sequelize.DATE,
            has_unread: Sequelize.TINYINT,
            is_blocked: Sequelize.TINYINT,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('pivot_user_room');
    }
};