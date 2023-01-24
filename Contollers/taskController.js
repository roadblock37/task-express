const { StatusCodes } = require("http-status-codes");
const Task = require("../Models/taskSchema");

const getAllTasks = async (req, res) => {
  const allTasks = await Task.find({});
//   console.log(allTasks)
  res.status(StatusCodes.OK).json({ allTasks, count: allTasks.length });
};

const getTask = async (req, res) => {};
const updateTask = async (req, res) => {};
const deleteTask = async (req, res) => {};
const createTask = async (req, res) => {};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
