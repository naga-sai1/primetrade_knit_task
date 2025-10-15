# Task Management System with Role-Based Access

A scalable REST API system built with Node.js, Express, and MongoDB, featuring authentication, role-based access control, and a React frontend for task management.

## Features

### Backend

- User Authentication System
  - Registration and Login with JWT
  - Password hashing using bcrypt
  - Role-based access control (User vs Admin)
- Task Management APIs
  - CRUD operations for tasks
  - Protected routes with JWT authentication
  - Role-based permissions
- Security Features
  - Input validation and sanitization
  - Secure JWT handling
  - Password hashing
  - Request rate limiting
- API Features
  - RESTful architecture
  - Versioned API endpoints
  - Comprehensive error handling
  - Request validation

### Frontend

- React-based UI with:
  - User registration and login forms
  - Protected dashboard
  - Task management interface
  - Error/Success notifications

## Tech Stack

### Backend

- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Express-validator for input validation

### Frontend

- React.js
- Axios for API calls
- React Router for navigation
- React Context for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   \`\`\`

2. Install backend dependencies:
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. Install frontend dependencies:
   \`\`\`bash
   cd ../frontend
   npm install
   \`\`\`

4. Set up environment variables:
   Create a .env file in the backend directory with:
   \`\`\`
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/task-management
   JWT_SECRET=your_jwt_secret
   \`\`\`

5. Start the servers:

Backend:
\`\`\`bash
cd backend
npm start
\`\`\`

Frontend:
\`\`\`bash
cd frontend
npm start
\`\`\`

## API Documentation

### Authentication Endpoints

\`\`\`
POST /api/v1/auth/register
POST /api/v1/auth/login
\`\`\`

### Task Endpoints

\`\`\`
GET /api/v1/tasks - Get all tasks (Admin) or user's tasks (User)
POST /api/v1/tasks - Create a new task
GET /api/v1/tasks/:id - Get a specific task
PUT /api/v1/tasks/:id - Update a task
DELETE /api/v1/tasks/:id - Delete a task
\`\`\`

## Scalability Notes

### Current Implementation

- Modular architecture for easy scaling
- MongoDB for flexible data storage
- JWT for stateless authentication

### Future Scalability Options

1. Microservices Architecture

   - Separate services for auth and tasks
   - Independent scaling of components

2. Caching Layer

   - Redis implementation for caching
   - Improved response times

3. Load Balancing

   - Nginx load balancer
   - Multiple server instances

4. Database Optimization
   - Indexes for faster queries
   - Database sharding for larger datasets

## Security Measures

1. Authentication

   - JWT tokens with expiration
   - Secure password hashing
   - Role-based access control

2. Data Protection

   - Input validation
   - XSS protection
   - CORS configuration

3. API Security
   - Rate limiting
   - Request validation
   - Error handling

## Testing

Run tests with:
\`\`\`bash
npm test
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
