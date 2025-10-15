const { Sequelize, Op } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Create Sequelize instance
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

// Import models
const initModels = () => {
    const User = require('../models/userModel')(sequelize);
    const Task = require('../models/taskModel')(sequelize);

    // Define associations
    User.hasMany(Task, {
        foreignKey: 'userId',
        as: 'tasks'
    });

    Task.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

    return { User, Task };
};

// Test database connection function
const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');

        // Initialize models and their associations
        const models = initModels();

        // Drop and recreate all tables
        await sequelize.sync({ force: true });
        console.log('Database models synchronized');

        return { sequelize, ...models };
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
};

module.exports = { sequelize, connectToDatabase };