# 🍰 SweetDeli - E-Commerce Platform

A modern, full-stack e-commerce web application for a sweet delicacies shop.

## 🚀 Tech Stack

### Frontend

- **React** - Modern UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication
- **Bcrypt** - Password hashing

## 📁 Project Structure

```
sweetdeli/
├── client/        # React frontend
├── server/        # Node + Express backend
├── README.md
└── .gitignore
```

## 🎯 Features

- User authentication (Register/Login)
- Role-based access control (User/Admin)
- Product catalog with categories
- Responsive design (Mobile-first)
- Newsletter subscription
- Secure API endpoints

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

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

### Environment Variables

#### Server

Create `.env` file in the `server` directory (see `.env.example`):

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sweetdeli
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
```

#### Client

Create `.env` file in the `client` directory (see `.env.example`):

```env
VITE_API_URL=http://localhost:5000/api
```

## 📝 Development Phases

- ✅ Phase 0: Project Setup
- ✅ Phase 1: Frontend Planning
- ✅ Phase 2: Frontend Development
- ✅ Phase 3: Backend Planning
- ✅ Phase 4: Backend Development
- ✅ Phase 5: Frontend ↔ Backend Integration
- ✅ Phase 6: Testing & Polish

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Complete setup and installation guide
- **[DEVELOPMENT.md](DEVELOPMENT.md)** - Developer guide and best practices
- **[client/COMPONENT_STRUCTURE.md](client/COMPONENT_STRUCTURE.md)** - Frontend
  component documentation
- **[server/API_DOCUMENTATION.md](server/API_DOCUMENTATION.md)** - Backend API
  reference

## ✨ Features Implemented

### Frontend

- ✅ Responsive navigation bar with authentication dropdown
- ✅ Beautiful hero section with product imagery
- ✅ Service slider with navigation dots
- ✅ Category icons grid (6 categories)
- ✅ Popular products grid with dynamic image loading
- ✅ Features section highlighting key benefits
- ✅ Video showcase section (YouTube embed)
- ✅ Testimonials section
- ✅ Newsletter subscription with image gallery
- ✅ Comprehensive footer with app download links
- ✅ Login page with social login options
- ✅ Register page with validation and terms acceptance
- ✅ AuthContext for global authentication state
- ✅ Protected routes and auth flow
- ✅ Full API integration with error handling
- ✅ Mobile-first responsive design
- ✅ Product images with Vite asset loading

### Backend

- ✅ Express.js server with security middleware
- ✅ MongoDB database with Mongoose ODM
- ✅ User authentication (register/login/me)
- ✅ JWT token-based authentication
- ✅ Role-based access control (user/admin)
- ✅ Product CRUD operations with pagination
- ✅ Newsletter subscription API with resubscribe logic
- ✅ Mongoose schema validation
- ✅ Error handling middleware with environment-aware responses
- ✅ Security (Helmet, CORS, Rate limiting)
- ✅ Password hashing with bcrypt


