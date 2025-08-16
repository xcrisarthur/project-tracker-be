const express = require('express');
const { getAllTasks, createTask, updateTask, deleteTask, getTasksByProjectId, getTaskById } = require('../controllers/taskController');

const router = express.Router();

router.get('/', getAllTasks);
router.get('/project/:project_id', getTasksByProjectId);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
