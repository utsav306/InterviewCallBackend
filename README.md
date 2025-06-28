# 🔐 Auth Backend

[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-black.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.0+-2D3748.svg)](https://www.prisma.io/)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)

> A robust and secure authentication backend built with modern technologies, providing enterprise-grade user management and token-based authorization for web applications.

---

## 🌟 Overview

This authentication service offers a complete solution for user authentication and authorization, built with security best practices and scalable architecture in mind. Perfect for modern web applications requiring secure user management.

---

## 🏗️ Architecture

```
src/
├── controllers/     # Route handlers and business logic
├── middleware/      # Authentication and validation middleware
├── routes/          # API route definitions
├── schemas/         # Zod validation schemas
├── utils/           # Helper functions and utilities
├── types/           # TypeScript type definitions
└── app.ts           # Express application setup
```

---

## 🔧 Tech Stack

| Technology                                                                                                | Purpose                  | Version |
| --------------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node.js&logoColor=white)          | **Runtime Environment**  | v16+    |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | **Programming Language** | v5.0+   |
| ![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat&logo=express&logoColor=white)    | **Web Framework**        | v4.18+  |
| ![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat&logo=mysql&logoColor=white)                | **Database**             | v8.0+   |
| ![Prisma](https://img.shields.io/badge/-Prisma-2D3748?style=flat&logo=prisma&logoColor=white)             | **ORM**                  | v5.0+   |
| ![JWT](https://img.shields.io/badge/-JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)            | **Authentication**       | Latest  |
| ![bcrypt](https://img.shields.io/badge/-bcrypt-red?style=flat)                                            | **Password Hashing**     | Latest  |
| ![Zod](https://img.shields.io/badge/-Zod-3E67B1?style=flat)                                               | **Schema Validation**    | Latest  |

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MySQL** (v8.0+) - [Download here](https://dev.mysql.com/downloads/)
- **Git** - Version control

### 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/auth-backend.git
   cd auth-backend
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

3. **Environment configuration**
   ```bash
   # Copy environment template
   cp .env.example .env
   ```

### ⚙️ Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_URL="mysql://username:password@localhost:3306/authdb"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-min-32-characters"
```

### 🗄️ Database Setup

1. **Create MySQL database**

   ```sql
   CREATE DATABASE authdb;
   ```

2. **Run Prisma migrations**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev --name init

   # Seed database (optional)
   npx prisma db seed
   ```

3. **View database (optional)**
   ```bash
   npx prisma studio
   ```

---

## 🏃‍♂️ Running the Application

### Development Mode

```bash
npm run dev
```

The server will start on `http://localhost:5000` with hot reloading enabled.

## 📚 API Documentation

### 🔐 Authentication Endpoints

| Method | Endpoint                    | Description            | Auth Required |
| ------ | --------------------------- | ---------------------- | ------------- |
| `POST` | `/api/auth/register`        | Register new user      | ❌            |
| `POST` | `/api/auth/login`           | User login             | ❌            |
| `POST` | `/api/auth/logout`          | User logout            | ✅            |
| `POST` | `/api/auth/refresh`         | Refresh JWT token      | ❌            |
| `POST` | `/api/auth/forgot-password` | Request password reset | ❌            |
| `POST` | `/api/auth/reset-password`  | Reset password         | ❌            |

### 👤 User Endpoints

| Method   | Endpoint             | Description      | Auth Required |
| -------- | -------------------- | ---------------- | ------------- |
| `GET`    | `/api/users/profile` | Get user profile | ✅            |
| `PUT`    | `/api/users/profile` | Update profile   | ✅            |
| `DELETE` | `/api/users/account` | Delete account   | ✅            |

### 📝 Example Requests

<details>
<summary><strong>Register User</strong></summary>

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

</details>

<details>
<summary><strong>Login User</strong></summary>

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!"
  }'
```

</details>

---

## 🔒 Security Features

### 🛡️ **Built-in Security Measures**

- **Password Hashing** - bcrypt with configurable salt rounds
- **JWT Security** - Short-lived access tokens + refresh tokens
- **Input Validation** - Comprehensive Zod schemas
- **SQL Injection Protection** - Prisma ORM parameterized queries
- **CORS Configuration** - Configurable cross-origin policies
- **Environment Variables** - Sensitive data protection

### 🚨 **Recommended Additional Security**

- **Rate Limiting** - Use `express-rate-limit`
- **Helmet.js** - Security headers
- **HTTPS** - SSL/TLS encryption in production
- **API Gateway** - Request throttling and monitoring
- **Database Encryption** - Encrypt sensitive fields

---

## 📁 Project Structure

```
auth-backend/
├── 📁 prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── 📁 src/
│   ├── 📁 controllers/        # Route controllers
│   │   ├── authController.ts
│   │   └── userController.ts
│   ├── 📁 middleware/         # Custom middleware
│   │   ├── auth.ts
│   │   └── validation.ts
│   ├── 📁 routes/             # API routes
│   │   ├── auth.ts
│   │   └── users.ts
│   ├── 📁 schemas/            # Zod validation schemas
│   │   └── authSchemas.ts
│   ├── 📁 utils/              # Utility functions
│   │   ├── jwt.ts
│   │   └── email.ts
│   ├── 📁 types/              # TypeScript types
│   │   └── index.ts
│   └── app.ts                 # Express app setup
├── 📁 tests/                  # Test files
├── .env.example               # Environment template
├── docker-compose.yml         # Docker configuration
├── package.json
└── README.md
```

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### 📋 **Development Guidelines**

- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation
- Follow conventional commit messages
- Ensure all tests pass

---

<div align="center">

</div>
