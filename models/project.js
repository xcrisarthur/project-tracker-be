// models/project.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Project extends Model {}

Project.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('draft', 'in progress', 'done'),
    defaultValue: 'draft'
  },
  completion_progress: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00
  }
}, {
  sequelize,
  modelName: 'Project',
  timestamps: true,
  createdAt: 'created_at', // Menyesuaikan nama kolom di database
  updatedAt: 'updated_at'  // Menyesuaikan nama kolom di database
});

module.exports = Project;
