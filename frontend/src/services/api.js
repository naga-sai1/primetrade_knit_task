import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';

export const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const authService = {
    login: async (email, password) => {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            setAuthToken(response.data.token);
        }
        return response.data;
    },

    register: async (userData) => {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    },

    logout: () => {
        localStorage.removeItem('token');
        setAuthToken(null);
    }
};

export const taskService = {
    getTasks: async () => {
        const response = await axios.get(`${API_URL}/tasks`);
        return response.data;
    },

    createTask: async (taskData) => {
        const response = await axios.post(`${API_URL}/tasks`, taskData);
        return response.data;
    },

    updateTask: async (id, taskData) => {
        const response = await axios.put(`${API_URL}/tasks/${id}`, taskData);
        return response.data;
    },

    deleteTask: async (id) => {
        const response = await axios.delete(`${API_URL}/tasks/${id}`);
        return response.data;
    }
};