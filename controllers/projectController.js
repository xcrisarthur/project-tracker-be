const Project = require('../models/project');
const Task = require('../models/task');

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({
      include: Task
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id, {
      include: Task
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const { name } = req.body;
    const newProject = await Project.create({ name });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { name, status, completion_progress } = req.body;
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.name = name || project.name;
    project.status = status || project.status;
    project.completion_progress = completion_progress || project.completion_progress;

    await project.save();
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.destroy();
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
