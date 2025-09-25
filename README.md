# Student name: Breno Lopes Mafra
# Student ID: 101485572

# COMP3123 - Assignment 1

- About the Assignment:
This project is a RESTful API built with Node.js, Express, and MongoDB. It provides User Management and Employee Management functionality, following CRUD principles and proper HTTP status codes tested on Postman.

# Used Technologies
- Node.js  
- Express  
- MongoDB (Mongoose)  
- bcrypt (password hashing)  
- express-validator (input validation)  
- nodemon (development) 

# To Setup
- Clone the repository: git clone https://github.com/BrenoMafra13/101485572_COMP3123_Assignment1.git
cd 101485572_COMP3123_Assignment1
- Install dependecies: npm install
- Run server: npm run dev
- Run application: npm start
- Connect to a local MongoDB instance: mongodb://127.0.0.1:27017/comp3123_assignment1

# Endpoints
User Routes:

POST /api/v1/user/signup (Create a new user)

POST /api/v1/user/login (Login with email or username + password)

----------------------------------------------------------------

Employee Routes:

GET /api/v1/emp/employees (List all employees)

POST /api/v1/emp/employees (Create a new employee)

GET /api/v1/emp/employees/{employeeid} (Get employee by ID)

PUT /api/v1/emp/employees/{employeeid} (Update employee by ID)

DELETE /api/v1/emp/employees?employeeid={employeeid} (Delete employee by ID)

# Sample user credentials for USERS:

"username": "PriteshPatel1",
"email":"priteshpatel1@gmail.com",
“password": "password123"

# Sample Employee payload:

{
  "first_name": "Alice",
  "last_name": "Johnson",
  "email": "alice.johnson@example.com",
  "position": "Designer",
  "salary": 85000,
  "date_of_joining": "2023-08-10T00:00:00.000Z",
  "department": "Design"
}

# This project is deployed on Vercel
- Base URL: https://101485572-comp-3123-assignment1-fbntfj48f.vercel.app/
- Accessing the root / will show Cannot GET / since no route is defined there.
Please use the API endpoints above.