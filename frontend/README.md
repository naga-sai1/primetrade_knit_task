# Task Manager Frontend

A React-based frontend application for the Task Management System with role-based access control.

## Features

- User Authentication

  - User registration with email and password
  - Login with JWT token authentication
  - Secure session management
  - Automatic token handling with axios

- Task Management

  - Create new tasks with title and description
  - View list of tasks
  - Delete tasks
  - Role-based access control (Admin vs User views)

- UI/UX Features
  - Responsive design
  - Form validation
  - Error handling and user feedback
  - Clean and intuitive interface

## Tech Stack

- **React.js** - Frontend framework
- **Axios** - HTTP client for API requests
- **CSS** - Custom styling

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   └── tasks/
│   │       ├── TaskList.js
│   │       └── TaskForm.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App

## API Integration

The frontend connects to a backend server running on `http://localhost:5000`. Make sure the backend server is running before using the application.

### API Services

The `api.js` service handles all API calls with the following features:

- Automatic JWT token handling
- Request/response interceptors
- Error handling
- Authentication state management

## Authentication

Authentication is handled using JWT (JSON Web Tokens):

1. Token is received upon successful login
2. Token is stored in localStorage
3. Token is automatically added to API requests
4. Token is removed on logout

## Component Structure

### Authentication Components

- `Login.js` - Handles user login
- `Register.js` - Handles new user registration

### Task Components

- `TaskList.js` - Displays and manages tasks
- `TaskForm.js` - Creates new tasks

## State Management

The application uses React's built-in state management with:

- useState for local component state
- useEffect for side effects
- Props for component communication

## Styling

The application uses custom CSS with:

- Responsive design principles
- Clean and modern UI
- Consistent color scheme
- Mobile-friendly layout

## Error Handling

- Form validation errors
- API error responses
- Network error handling
- User-friendly error messages

## Security Features

- JWT token authentication
- Protected routes
- Secure password handling
- XSS protection
- CORS configuration

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
