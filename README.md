# Team Task Manager

A full-stack MERN application where users can create projects, assign tasks, and track progress with role-based access.

This project helps teams manage projects and tasks efficiently through role-based collaboration and task tracking.

---

## Features

- User Authentication (Login/Register)
- Create and Manage Projects
- Assign Tasks to Team Members
- Task Status Tracking
- Dashboard for Progress Monitoring
- Role-Based Access (Admin / Member)

---

## Tech Stack

### Frontend
- React.js
- CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## Folder Structure

```bash
TeamTaskManager/
│
├── client/      # React Frontend
├── server/      # Node Backend
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/sanikadesai76/TeamTaskManager.git
```

---

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## Run Frontend

```bash
cd client
npm start
```

---

## Run Backend

```bash
cd server
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## Screenshots

- Login Page
- Dashboard
- Project Management
- Task Board

---

## Author

Sanika Desai
