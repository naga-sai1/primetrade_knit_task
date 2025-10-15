const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sequelize } = require('../config/db');

exports.register = async (req, res) => {
    try {
        const User = sequelize.models.User;
        const { username, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({
            where: {
                [sequelize.Op.or]: [
                    { email: email },
                    { username: username }
                ]
            }
        });

        if (existingUser) {
            return res.status(400).json({
                message: 'User with this email or username already exists'
            });
        }

        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashed,
            role: role || 'user' // default to 'user' if role not specified
        });

        const { password: _, ...userWithoutPassword } = user.get();
        res.status(201).json({
            message: 'User registered successfully',
            user: userWithoutPassword
        });
    } catch (error) {
        console.error('Registration error:', error);
        if (error.name === 'SequelizeValidationError') {
            res.status(400).json({
                message: 'Validation error',
                errors: error.errors.map(e => ({
                    field: e.path,
                    message: e.message
                }))
            });
        } else if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({
                message: 'User with this email or username already exists'
            });
        } else {
            res.status(500).json({
                message: 'Error registering user',
                error: error.message
            });
        }
    }
};

exports.login = async (req, res) => {
    try {
        const User = sequelize.models.User;
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const User = sequelize.models.User;
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] },
            include: [{
                model: sequelize.models.Task,
                as: 'tasks'
            }]
        });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


