# Social Media app

Social Media Application
Overview
This is a full-stack social media application built using the MERN stack (MongoDB, Express.js, React, Node.js) with real-time capabilities enabled by Socket.io and comprehensive state management handled by Recoil.

Features
User Authentication: Secure signup, login, and logout functionalities.
User Profile: Update profile information including avatar, bio, and password.
Posts: Create, read, update, and delete posts with text and image support.
Likes and Comments: Like and comment on posts.
Real-Time Messaging: Chat with other users in real-time.
Follow System: Follow and unfollow users.
Suggested Users: Get suggestions for users to follow.
Account Freeze: Temporarily freeze user accounts.
Technologies Used
Backend
Node.js & Express.js: For building the server and API endpoints.
MongoDB & Mongoose: For data storage and ORM.
Cloudinary: For image storage and management.
JWT: For secure user authentication.
Socket.io: For real-time messaging.
Bcrypt.js: For hashing passwords.
dotenv: For managing environment variables.
Frontend
React: For building the user interface.
Chakra UI: For component styling and theming.
Recoil: For state management.
React Router: For client-side routing.
React Big Calendar: (planned) For scheduling sports events.
Project Structure
Backend
controllers/: Contains all the controller files for handling business logic.
models/: Contains the Mongoose schemas.
routes/: Contains the route definitions.
middlewares/: Middleware for authentication and error handling.
socket/: Contains Socket.io setup for real-time features.
utils/: Utility functions for the application.
Frontend
components/: Reusable UI components.
pages/: Page components for different routes.
hooks/: Custom React hooks for various functionalities.
atoms/: Recoil atoms for state management.
Setup
Prerequisites
Node.js
MongoDB
Cloudinary Account (for image uploads)

Project Overview
This project is a community-based capstone designed to showcase full-stack development skills. The application includes a backend server built with Node.js and a frontend client built with React. The project aims to provide a platform for users to interact, share information, and engage with community content.

Table of Contents
Installation
Usage
Features
Contributing
License
Contact
Installation
Backend
Clone the repository:

bash
Copy code
git clone https://github.com/tanTvo/Vo_Tan_community_Capstone.git
cd Vo_Tan_community_Capstone/backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables by creating a .env file in the backend directory:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server:

bash
Copy code
npm start
Frontend
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Usage
Ensure both the backend and frontend servers are running.
Open your browser and navigate to http://localhost:3000 to view the application.
Features
User authentication (registration and login)
CRUD operations for posts
Commenting system
User profiles
Real-time updates using WebSockets
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or concerns, please open an issue or contact the project maintainers.

This README provides a clear and concise overview of the project, including installation instructions, usage, features, and contribution guidelines.