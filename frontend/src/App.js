import React, { useState, useEffect } from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import TaskList from './components/tasks/TaskList';
import TaskForm from './components/tasks/TaskForm';
import { authService } from './services/api';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            // You could also fetch user data here
        }
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        authService.logout();
        setIsAuthenticated(false);
        setUser(null);
    };

    const toggleAuthMode = () => {
        setShowRegister(!showRegister);
    };

    const handleRegisterSuccess = () => {
        setShowRegister(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Task Manager</h1>
                {isAuthenticated && (
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                )}
            </header>
            <main>
                {!isAuthenticated ? (
                    <div className="auth-container">
                        {showRegister ? (
                            <>
                                <Register onRegisterSuccess={handleRegisterSuccess} />
                                <p>
                                    Already have an account?{' '}
                                    <button onClick={toggleAuthMode} className="link-btn">
                                        Login
                                    </button>
                                </p>
                            </>
                        ) : (
                            <>
                                <Login onLogin={handleLogin} />
                                <p>
                                    Don't have an account?{' '}
                                    <button onClick={toggleAuthMode} className="link-btn">
                                        Register
                                    </button>
                                </p>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="dashboard">
                        <TaskForm />
                        <TaskList />
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;