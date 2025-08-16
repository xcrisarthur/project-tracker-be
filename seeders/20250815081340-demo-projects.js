'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('projects', [
      {
        name: 'Project Alpha',
        status: 'draft',
        completion_progress: 0.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Project Beta',
        status: 'in progress',
        completion_progress: 50.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('tasks', [
      {
        project_id: 1,
        name: 'Task 1',
        status: 'done',
        weight: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        project_id: 1,
        name: 'Task 2',
        status: 'draft',
        weight: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
    await queryInterface.bulkDelete('projects', null, {});
  },
};
