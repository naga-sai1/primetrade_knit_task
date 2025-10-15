import React, { useState, useEffect } from 'react';
import { taskService } from '../../services/api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await taskService.getTasks();
            setTasks(response);
            setError('');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch tasks');
        } finally {
            setLoading(false);
        }
    };

    const deleteTask = async (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await taskService.deleteTask(id);
                fetchTasks();
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to delete task');
            }
        }
    };

    if (loading) {
        return <div className="loading">Loading tasks...</div>;
    }

    return (
        <div className="task-list">
            <h2>My Tasks</h2>
            {error && <div className="error">{error}</div>}
            {tasks.length === 0 ? (
                <p className="no-tasks">No tasks found. Create one above!</p>
            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className="task-item">
                            <div className="task-content">
                                <h3>{task.title}</h3>
                                <p>{task.description}</p>
                                <span className="task-date">
                                    Created: {new Date(task.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="task-actions">
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTask(task.id)}
                                    title="Delete task"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;