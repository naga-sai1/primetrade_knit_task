# Task Manager Application Submission

## Project Overview

A full-stack task management application with role-based access control, built using React.js for the frontend and Node.js/Express.js for the backend.

## Live Demo

- Repository URL: https://github.com/naga-sai1/primetrade_knit_task
- Backend URL: http://localhost:5000
- Frontend URL: http://localhost:3000

## Features Implemented

### Authentication & Authorization

- ✅ User registration and login system
- ✅ JWT-based authentication
- ✅ Role-based access control (Admin/User)
- ✅ Protected routes
- ✅ Secure password hashing

### Task Management

- ✅ Create, Read, Update, Delete (CRUD) operations for tasks
- ✅ User-specific task views
- ✅ Admin access to all tasks
- ✅ Task ownership validation

### Database

- ✅ MySQL database with Sequelize ORM
- ✅ Proper model associations
- ✅ Data validation and sanitization

### Security Features

- ✅ Input validation
- ✅ Rate limiting
- ✅ Error handling
- ✅ JWT token management
- ✅ Protected API endpoints

### Frontend Features

- ✅ Responsive design
- ✅ Form validation
- ✅ Error handling
- ✅ Protected routes
- ✅ User-friendly interface

## Tech Stack

### Frontend

- React.js
- Axios for API calls
- CSS for styling
- JWT for authentication

### Backend

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT for authentication
- bcrypt for password hashing

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MySQL
- npm or yarn

### Backend Setup

1. Navigate to backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create .env file with following variables:

   ```
   PORT=5000
   DB_NAME="primetrade"
   DB_USER="your_db_user"
   DB_PASSWORD="your_db_password"
   DB_HOST="localhost"
   DB_PORT=3306
   JWT_SECRET="your_jwt_secret"
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

## API Documentation

### Authentication Endpoints

- POST /api/v1/auth/register - Register new user
- POST /api/v1/auth/login - Login user
- GET /api/v1/auth/profile - Get user profile (Protected)

### Task Endpoints

- GET /api/v1/tasks - Get all tasks (Admin) or user's tasks (User)
- POST /api/v1/tasks - Create new task
- PUT /api/v1/tasks/:id - Update task
- DELETE /api/v1/tasks/:id - Delete task

## Testing Instructions

1. Register a new user:

   - Use the registration form
   - Provide username, email, and password
   - Note: First user can be made admin in database

2. Login:

   - Use registered email and password
   - JWT token will be stored automatically

3. Create Tasks:

   - Click "Create Task" button
   - Fill in title and description
   - Submit the form

4. Manage Tasks:
   - View tasks in the dashboard
   - Delete tasks using the delete button
   - Admin can see all users' tasks

## Security Measures

- Password hashing using bcrypt
- JWT token authentication
- Input validation and sanitization
- Rate limiting on API endpoints
- Protected routes with middleware
- SQL injection prevention with Sequelize
- CORS configuration

## Additional Notes

- Database automatically syncs on server start
- JWT tokens expire in 24 hours
- Rate limiting: 5 requests per 15 minutes for auth routes
- Form validation on both frontend and backend

## Future Improvements

1. Password reset functionality
2. Email verification
3. Task categories and filters
4. User profile management
5. Real-time notifications

## Testing Accounts

- Admin User:

  - Email: admin@example.com
  - Password: admin123

- Regular User:
  - Email: user@example.com
  - Password: user123

## Contact

For any queries regarding this submission:
[Your Contact Information]

## License

MIT License
