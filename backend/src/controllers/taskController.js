const { sequelize } = require('../config/db');

exports.createTask = async (req, res) => {
    try {
        const Task = sequelize.models.Task;
        const task = await Task.create({ ...req.body, userId: req.user.id });
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const Task = sequelize.models.Task;
        const tasks = req.user.role === 'admin'
            ? await Task.findAll({
                include: [{
                    model: sequelize.models.User,
                    as: 'user',
                    attributes: ['username', 'email']
                }]
            })
            : await Task.findAll({
                where: { userId: req.user.id },
                include: [{
                    model: sequelize.models.User,
                    as: 'user',
                    attributes: ['username', 'email']
                }]
            });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const Task = sequelize.models.Task;
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        // Check if user has permission
        if (req.user.role !== 'admin' && task.userId !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        await task.update(req.body);
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const Task = sequelize.models.Task;
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        // Check if user has permission
        if (req.user.role !== 'admin' && task.userId !== req.user.id) {
            return res.status(403).json({ message: 'Not authorized' });
        }

        await task.destroy();
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};