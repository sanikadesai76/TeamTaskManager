##Team Task Manager

A full-stack MERN application where users can create projects, assign tasks, and track progress with role-based access.

##Features:
User Authentication (Login/Register)
Create and Manage Projects
Assign Tasks to Team Members
Task Status Tracking
Dashboard for Progress Monitoring
Role-Based Access (Admin / Member)


##Tech Stack
Frontend
React.js
CSS
Axios
Backend
Node.js
Express.js
MongoDB
JWT Authentication


##Folder Structure

TeamTaskManager/
│
├── client/      # React Frontend
├── server/      # Node Backend
├── README.md
└── .gitignore


##Installation
Clone Repository
git clone <https://github.com/sanikadesai76/TeamTaskManager>

##Install Frontend Dependencies
cd client
npm install

##Install Backend Dependencies
cd ../server
npm install

##Run Frontend
cd client
npm start

##Run Backend
cd server
npm run dev

##Environment Variables
Create a .env file inside the server folder.
PORT=5000
MONGO_URI= <your_mongodb_connection>
JWT_SECRET= <your key>


Author
Sanika Desai