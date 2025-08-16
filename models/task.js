// models/task.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Project = require('./project');

class Task extends Model {}

Task.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('draft', 'in progress', 'done'),
    defaultValue: 'draft'
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Task',
  timestamps: true,
  createdAt: 'created_at', // Menyesuaikan nama kolom di database
  updatedAt: 'updated_at', // Menyesuaikan nama kolom di database
});

Task.belongsTo(Project, { foreignKey: 'project_id' });
Project.hasMany(Task, { foreignKey: 'project_id' });

module.exports = Task;
