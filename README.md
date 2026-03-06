# Expense Tracker API

REST API for personal expense management built with **Node.js**, **Express**, and **MySQL**.

This project allows users to register, authenticate and manage their personal expenses securely.

---

## Features

* User registration
* Secure authentication using JWT
* Password hashing with bcrypt
* Create expenses
* Get expenses by user
* Expense categorization
* RESTful API architecture
* Layered architecture (Routes → Controllers → Services → Models)

---

## Tech Stack

* Node.js
* Express
* MySQL
* JWT
* bcrypt

---

## Project Structure

```
src
├── config
│   └── db.js
├── controller
│   ├── user.controller.js
│   └── expense.controller.js
├── model
│   ├── user.model.js
│   └── expense.model.js
├── routes
│   ├── user.routes.js
│   └── expense.routes.js
├── services
│   ├── user.services.js
│   └── expense.services.js
└── app.js
```

---

## Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
```

Install dependencies:

```
npm install
```

Create a `.env` file based on `.env.example`.

Start the server:

```
npm run dev
```

---

## API Endpoints

### Users

```
POST /users
GET /users
```

### Expenses

```
POST /expenses
GET /expenses
GET /expenses/:userId
```

---

## Author

Julio Sosa
Junior Backend Developer
## Future Improvements

- JWT authentication middleware
- Expense statistics
- Pagination
- Expense categories table
- Docker support
