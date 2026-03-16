# Expense Tracker API

REST API for personal expense management built with **Node.js**, **Express**, and **MySQL**.

This project allows users to **register, authenticate, and manage their personal expenses securely** using **JWT authentication**.

---

# Features

* User registration
* User login with JWT authentication
* Password hashing with bcrypt
* Create expenses
* Get all expenses for authenticated user
* Get a specific expense
* Update expenses
* Delete expenses
* Expense categorization
* Authorization: users can only access their own expenses
* Global error handling middleware
* Request validation using schemas
* RESTful API architecture
* Layered architecture (Routes → Controllers → Services → Models)

---

# Tech Stack

* Node.js
* Express
* MySQL
* JWT (jsonwebtoken)
* bcrypt
* Zod (schema validation)

---

# Project Structure

```
src
├── config
│   └── db.js
│
├── controller
│   ├── auth.controller.js
│   ├── expense.controller.js
│   └── user.controller.js
│
├── middleware
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── validate.middleware.js
│
├── model
│   ├── auth.model.js
│   ├── expenses.model.js
│   └── user.model.js
│
├── routes
│   ├── auth.routes.js
│   ├── expense.routes.js
│   └── user.routes.js
│
├── schemas
│   └── expense.schema.js
│
├── services
│   ├── auth.services.js
│   ├── expense.services.js
│   └── user.services.js
│
├── utils
│
└── app.js
```

---

# Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
```

Go to the project folder:

```
cd expense-tracker
```

Install dependencies:

```
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

Example:

```
PORT=1234
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=expense_tracker
JWT_SECRET=your_secret_key
```

---

# Running the Server

Development mode:

```
npm run dev
```

Production:

```
npm start
```

Server will run on:

```
http://localhost:1234
```

---

# Authentication

This API uses **JWT tokens** for authentication.

After login, the token must be included in the request headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

# API Endpoints

## Authentication

Login

```
POST /auth/login
```

Example body:

```
{
  "username": "julio",
  "password": "password123"
}
```

---

## Users

Register a new user

```
POST /users
```

Get users

```
GET /users
```

---

## Expenses (Protected Routes)

All expense routes require authentication.

Get all expenses for the authenticated user

```
GET /expenses
```

Get a specific expense

```
GET /expenses/:id
```

Create an expense

```
POST /expenses
```

Example body:

```
{
  "title": "Pizza",
  "amount": 20,
  "category": "food"
}
```

Update an expense

```
PATCH /expenses/:id
```

Example body:

```
{
  "amount": 30
}
```

Delete an expense

```
DELETE /expenses/:id
```

---

# Security

* Passwords are hashed using **bcrypt**
* Authentication handled with **JWT**
* Protected routes using authentication middleware
* Users can only access their own expenses

---

# Future Improvements

* Pagination for expenses
* Expense statistics
* Expense categories table
* Rate limiting
* Docker support
* Unit testing
* API documentation with Swagger

---

# Author

**Julio Sosa**
Junior Backend Developer
