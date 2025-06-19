# Task Manager Full Stack Application

## Overview
A task management application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that allows users to create, manage, and organize their tasks.

## Core Features
- User authentication (signup/login)
- CRUD operations for tasks
- Task categorization
- Task status tracking
- Due date management

## Technical Stack
### Frontend
- React.js for UI components
- Redux or Context API for state management
- Material-UI or Tailwind CSS for styling
- Axios for API communication
- 

### Backend
- Node.js runtime
- Express.js framework
- MongoDB database
- Mongoose ODM
- JWT for authentication

## Data Models

### User Schema
```javascript
{
  username: String,
  email: String,
  password: String,
  createdAt: Date
}
```

### List Schema 

```javascript
   {
    name:String,
    color:String,
    icon:string
   }
```

### Task Schema
```javascript
{
  title: String,
  description: String,
  status: String,
  list:listId,
  due_date: Date,
  tags:String,
  userId: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Authentication
- POST /api/auth/signup - Register new user
- POST /api/auth/login - User login

### Tasks
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task
- GET /api/tasks/:id - Get single task

## Project Structure
```
task-manager/
├── client/                 # Frontend React application
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md
```

## Implementation Phases
1. Setup project structure and environment
2. Implement backend API and database
3. Create frontend components and routing
4. Integrate authentication
5. Connect frontend and backend
6. Add styling and polish UI
7. Testing and debugging
8. Deployment
