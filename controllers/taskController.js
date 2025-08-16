const Task = require('../models/task');
const Project = require('../models/project');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { name, status, weight, project_id } = req.body;
    const project = await Project.findByPk(project_id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const newTask = await Task.create({ name, status, weight, project_id });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { name, status, weight, project_id } = req.body;
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.name = name || task.name;
    task.status = status || task.status;
    task.weight = weight || task.weight;
    task.project_id = project_id || task.project_id;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.destroy();
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTasksByProjectId = async (req, res) => {
  try {
    const { project_id } = req.params;  // Mengambil project_id dari parameter route
    const tasks = await Task.findAll({
      where: { project_id },  // Filter task berdasarkan project_id
    });

    if (tasks.length === 0) {
      return res.status(404).json({ message: 'No tasks found for this project' });
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params; // Mengambil task id dari parameter route
    const task = await Task.findByPk(id); // Mencari task berdasarkan ID

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(task); // Mengembalikan data task dalam format JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTasksByProjectId, getTaskById };
