# Personal Finance Dashboard – Backend

Industry-ready backend for a full‑stack Personal Finance Dashboard. This service provides secure authentication, expense tracking, budgeting, subscriptions, and analytics endpoints that return **chart‑ready data** for the frontend.

---

## Table of Contents

* Overview
* Tech Stack
* Architecture
* Getting Started
* Environment Variables
* Scripts
* Project Structure
* Authentication
* API Documentation
* Error Handling
* Security Practices
* Development Workflow

---

## Overview

This backend is built with a **modular, service‑layer architecture** used in production systems. Controllers handle HTTP concerns, services encapsulate business logic, and MongoDB aggregation pipelines power analytics for dashboards and charts.

**Key capabilities**:

* JWT-based authentication
* Expense CRUD
* Budget tracking
* Subscription management
* Analytics endpoints for charts (pie, bar, line)

---

## Tech Stack

* **Node.js** + **Express**
* **MongoDB** + **Mongoose**
* **JWT** for authentication
* **bcrypt** for password hashing
* **express-validator** for request validation
* **dotenv** for environment config

---

## Architecture

```
Client (React)
     ↓ HTTP (JSON)
Routes → Controllers → Services → Models (MongoDB)
```

**Design rules**:

* Routes only wire endpoints + middleware
* Controllers never access the DB directly
* Services contain all business logic
* Models define schemas, indexes, relations

---

## Getting Started

### Prerequisites

* Node.js 18+
* MongoDB (local or Atlas)

### Installation

```bash
cd backend
npm install
```

### Run in Development

```bash
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file in `/backend`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/finance_dashboard
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

---

## Scripts

| Script        | Description               |
| ------------- | ------------------------- |
| `npm run dev` | Start server with nodemon |
| `npm start`   | Start server (production) |

---

## Project Structure

```
src/
├── app.js
├── server.js
├── config/
├── modules/
│   ├── auth/
│   ├── expenses/
│   ├── analytics/
│   ├── budgets/
│   └── subscriptions/
├── middleware/
├── utils/
└── constants/
```

---

## Authentication

* Uses **JWT** with `Authorization: Bearer <token>` header
* Passwords are hashed using bcrypt
* Protected routes require valid JWT

---

# API Documentation

## Auth

### Register

**POST** `/auth/register`

Request:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token"
}
```

---

### Login

**POST** `/auth/login`

Request:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "token": "jwt_token"
}
```

---

## Expenses

### Create Expense

**POST** `/expenses`

Headers:

```
Authorization: Bearer <token>
```

Request:

```json
{
  "amount": 45.5,
  "category": "Food",
  "date": "2025-01-12",
  "description": "Groceries"
}
```

---

### Get Expenses (by Month)

**GET** `/expenses?month=2025-01`

Response:

```json
[
  {
    "amount": 45.5,
    "category": "Food",
    "date": "2025-01-12",
    "description": "Groceries"
  }
]
```

---

### Update Expense

**PUT** `/expenses/:id`

---

### Delete Expense

**DELETE** `/expenses/:id`

---

## Budgets

### Create / Update Budget

**POST** `/budgets`

Request:

```json
{
  "category": "Food",
  "limit": 500,
  "month": "2025-01"
}
```

---

## Subscriptions

### Create Subscription

**POST** `/subscriptions`

Request:

```json
{
  "name": "Netflix",
  "amount": 15.99,
  "billingCycle": "monthly",
  "nextPaymentDate": "2025-02-01"
}
```

---

## Analytics ⭐

### Spending by Category (Pie Chart)

**GET** `/analytics/spending-by-category?month=2025-01`

Response:

```json
[
  { "name": "Food", "value": 450 },
  { "name": "Rent", "value": 1200 }
]
```

---

### Monthly Spending (Bar / Line Chart)

**GET** `/analytics/monthly-spending?year=2025`

Response:

```json
[
  { "month": "Jan", "total": 2100 },
  { "month": "Feb", "total": 1950 }
]
```

---

### Budget Usage

**GET** `/analytics/budget-usage?month=2025-01`

Response:

```json
[
  { "category": "Food", "used": 450, "limit": 500 }
]
```

---

## Error Handling

Standard error format:

```json
{
  "status": "error",
  "message": "Resource not found"
}
```

---

## Security Practices

* Password hashing with bcrypt
* JWT expiration
* User‑scoped queries
* Input validation
* Rate limiting on auth routes

---

## Development Workflow

1. Define models
2. Implement services
3. Wire controllers
4. Expose routes
5. Test via Postman
6. Connect frontend
