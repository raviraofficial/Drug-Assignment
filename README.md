# 💊 Drug Information Filtering App

A full-stack web application to view and filter drug information by company name. Built with React (TypeScript), Express, and MongoDB.

---

## ⚙️ Tech Stack

### 🖥️ Frontend

- React + TypeScript + Vite
- MUI (Material UI)
- Axios
- React Router
- ESLint with TypeScript support
- Jest + React Testing Library

### 🔧 Backend

- Express.js (Node.js)
- MongoDB + Mongoose
- CORS + dotenv
- Jest (unit & integration tests)
- Deployed using Render

---

## ▶️ How to Run Locally

### 🧪 Prerequisites

- Node.js >= 18.x
- MongoDB instance (local or MongoDB Atlas)
- Yarn or npm

---

### 🔁 Clone the Repository

```bash
git clone https://github.com/raviraofficial/Drug-Assignment.git
cd Drug-Assignment
```

## 📦 Install All Dependencies

```bash
# For both frontend and backend
cd backend
npm install

cd frontend
npm install
```

## 🚀 Start Backend Server

```bash
# For both frontend and backend
cd backend
# Create a .env file based on .env.example
# MONGODB_URI=<your_mongodb_connection_string>
# PORT=3000

npm run seed
npm run dev
# Runs on http://localhost:3000
```
## 🌐 Start Frontend App

```bash
cd frontend
npm run dev
# Runs on http://localhost:5173
```

## 🧪 Run Tests
```bash
✅ Backend Tests
cd backend
npm run test

✅ Frontend Tests
cd frontend
npm run test