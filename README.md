#Backend API for Course Management System
This is the backend implementation for a course management system. The API is built using Express.js and connects to a MongoDB database. It provides endpoints for user authentication, course management, instructor management, and lecture scheduling.

Technologies Used
Node.js: JavaScript runtime for building the backend.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing data.a
Mongoose: MongoDB object modeling tool for Node.js.
dotenv: Loads environment variables from a .env file.
Cors: Middleware for enabling Cross-Origin Requests.
Multer: Middleware for handling file uploads.
Installation
Prerequisites
Make sure you have the following installed:

Node.js (version 14 or higher)
MongoDB (local instance or MongoDB Atlas)
npm (Node Package Manager)
Steps to Install
Clone the repository:

bash
Copy
git clone <repository-url>
cd <project-directory>
Install the required dependencies:

bash
Copy
npm install
Create a .env file in the root of the project with the following configuration:

ini
Copy
PORT=5000
MONGO_URI=<Your MongoDB URI>
Run the application:

bash
Copy
npm start
The server will now be running on the port specified in the .env file.

API Endpoints
User Routes (/api)
POST /api/register: Register a new user.
Body: { "email": "<email>", "password": "<password>" }
POST /api/login: Login with existing user credentials.
Body: { "email": "<email>", "password": "<password>" }
Course Routes (/api/courses)
POST /api/courses/create: Create a new course (Admin only).

Body: { "name": "<course-name>", "description": "<course-description>", "image": "<image-file>" }
Requires admin privileges.
GET /api/courses: Get all courses.

Auth required.
Instructor Routes (/api/instructors)
POST /api/instructors/add: Add a new instructor (Admin only).

Body: { "name": "<instructor-name>", "bio": "<instructor-bio>" }
Requires admin privileges.
PATCH /api/instructors/update/:instructorId: Update an instructor's details (Admin only).

Body: { "name": "<instructor-name>", "bio": "<instructor-bio>" }
Requires admin privileges.
GET /api/instructors/allinstructor: Get all instructors.

Auth required.
Admin-only endpoint.
Lecture Routes (/api/lectures)
POST /api/lectures/schedule: Schedule a new lecture (Admin only).

Body: { "courseId": "<course-id>", "instructorId": "<instructor-id>", "schedule": "<date-time>" }
Requires admin privileges.
PATCH /api/lectures/lecture/:lectureId: Update lecture details (Admin only).

Body: { "courseId": "<course-id>", "instructorId": "<instructor-id>", "schedule": "<date-time>" }
Requires admin privileges.
GET /api/lectures/lecture/instructor/:instructorId: Get lectures by a specific instructor.

Auth required.
GET /api/lectures/lecture: Get all lectures.

Admin only.
Health Check
GET /health: Simple health check to ensure the server is running. Returns "OK".
Middleware
auth.js: Verifies JWT tokens for authenticated users.
CanAccess.js: Verifies user roles (e.g., admin).
multer: Used for file uploads (like course images).
Environment Variables
PORT: The port on which the server will run (default: 5000).
MONGO_URI: MongoDB connection string.
File Uploads
Course images are handled using Multer, and uploaded images are saved to the uploads/ directory.

Error Handling
All errors are caught by middleware and returned with a proper status code and error message.

Development & Contribution
Feel free to fork and contribute to this project. Before submitting a pull request, please make sure your changes pass all tests (if any) and maintain existing functionality.

