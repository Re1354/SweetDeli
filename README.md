# SweetDeli – Full-Stack E-Commerce Platform

SweetDeli is a modern, full-stack e-commerce web application for a sweet delicacies shop, built to demonstrate clean UI design, scalable backend architecture, and secure authentication using industry best practices.

---

## 🚀 Tech Stack

### Frontend

* **React** – Component-based UI development
* **Tailwind CSS** – Utility-first styling for rapid, consistent design
* **React Router** – Client-side routing
* **Axios** – API communication

### Backend

* **Node.js** – JavaScript runtime
* **Express.js** – RESTful API framework
* **MongoDB** – NoSQL database
* **Mongoose** – Object Data Modeling (ODM)
* **JWT** – Secure authentication
* **Bcrypt** – Password hashing

---

## 📁 Project Structure

```
sweetdeli/
├── client/        # React frontend
├── server/        # Node.js + Express backend
├── README.md
└── .gitignore
```

---

## 🎯 Core Features

* User authentication (Register / Login)
* Role-based access control (User / Admin)
* Product catalog with categorized listings
* Fully responsive, mobile-first UI
* Newsletter subscription system
* Secure and optimized RESTful APIs

---

## 🛠️ Getting Started

### Prerequisites

* Node.js (v16 or higher)
* MongoDB (Local or Atlas)
* npm or yarn

---

### Installation

#### Frontend Setup

```bash
cd client
npm install
npm run dev
```

#### Backend Setup

```bash
cd server
npm install
npm start
```

---

### Environment Variables

#### Server (`/server/.env`)

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sweetdeli
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
```

#### Client (`/client/.env`)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📝 Development Phases

* ✅ Phase 0: Project Setup
* ✅ Phase 1: Frontend Planning
* ✅ Phase 2: Frontend Development
* ✅ Phase 3: Backend Planning
* ✅ Phase 4: Backend Development
* ✅ Phase 5: Frontend ↔ Backend Integration
* ✅ Phase 6: Testing & Optimization

---

## ✨ Implemented Features

### Frontend

* Responsive navigation bar with authentication dropdown
* Hero section with promotional content
* Interactive service slider with navigation indicators
* Category icon grid (6 categories)
* Popular products section with dynamic rendering
* Features section highlighting service advantages
* Embedded video showcase
* Customer testimonials slider
* Newsletter subscription with image gallery
* Comprehensive footer with app store links
* Login and registration pages with validation
* Global authentication state using Context API
* Protected routes and secure auth flow
* Full API integration with graceful error handling
* Mobile-first, responsive design
* Optimized asset loading using Vite

---

### Backend

* Express.js server with security best practices
* MongoDB integration using Mongoose
* User authentication APIs (Register / Login / Profile)
* JWT-based authentication and authorization
* Role-based access control (User / Admin)
* Product CRUD APIs with pagination
* Newsletter subscription API with duplicate handling
* Schema-level validation
* Centralized error handling with environment-aware responses
* Security middleware (Helmet, CORS, Rate Limiting)
* Password hashing using bcrypt

---
