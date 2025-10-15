import React, { useState } from 'react';
import { taskService } from '../../services/api';

const TaskForm = ({ onTaskCreated }) => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setTaskData({
            ...taskData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await taskService.createTask(taskData);
            setTaskData({ title: '', description: '' });
            if (onTaskCreated) onTaskCreated();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create task');
        }
    };

    return (
        <div className="task-form">
            <h3>Create New Task</h3>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={taskData.title}
                        onChange={handleChange}
                        placeholder="Enter task title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={taskData.description}
                        onChange={handleChange}
                        placeholder="Enter task description"
                        required
                    />
                </div>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default TaskForm;