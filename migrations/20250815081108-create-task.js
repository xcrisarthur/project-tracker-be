'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'projects',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('draft', 'in progress', 'done'),
        defaultValue: 'draft',
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('tasks');
  },
};
