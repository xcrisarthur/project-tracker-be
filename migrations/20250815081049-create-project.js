'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projects', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('draft', 'in progress', 'done'),
        defaultValue: 'draft',
      },
      completion_progress: {
        type: Sequelize.DECIMAL(5, 2),
        defaultValue: 0.00,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projects');
  },
};
