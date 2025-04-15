# 🔐 React + Vite Authentication App (MySQL)

This project is a full SignIn and SignUp system built using **React (Vite)** for the frontend and **MySQL** for user data storage. It includes form validations, theme support, and placeholder OAuth integration.

---

## 🗄️ Database Setup (MySQL)

1. **Create the Database:**
   ```sql
   CREATE DATABASE IF NOT EXISTS my_auth_db;
   ```

2. **Switch to the Database:**
   ```sql
   USE my_auth_db;
   ```

3. **Create the `users` Table:**
   ```sql
   CREATE TABLE IF NOT EXISTS users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(100) NOT NULL,
       email VARCHAR(255) NOT NULL UNIQUE,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

---

## ⚙️ Environment Setup

Make sure to configure your database credentials inside the backend `.env` file:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=my_auth_db
```

---

## 🚀 Running the App

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

### Backend (Node.js + Express)

```bash
cd backend
npm install
node index.js
```

---

## 🧪 Features

- User SignUp with email and password
- User SignIn with credential validation
- Secure password hashing
DB structure

