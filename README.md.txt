# Healthcare Management System 🏥

A comprehensive healthcare management solution that combines patient care, appointment scheduling, and administrative functions into one integrated platform.

## Overview 📋

This project is a full-stack healthcare management system built with modern web technologies. It consists of three main components:
- **Frontend Portal**: Patient-facing website for appointments and information
- **Admin Dashboard**: Administrative interface for healthcare providers
- **Backend API**: RESTful API server handling data and business logic

## Features ⭐

### For Patients
- 🔐 User registration and authentication
- 📅 Online appointment scheduling
- 👨‍⚕️ Department and doctor selection
- 💬 Direct messaging with healthcare providers
- 📄 View medical departments and services

### For Healthcare Providers & Admins
- 👥 Patient management
- 📊 Appointment tracking and management
- ✉️ Message management system
- 👨‍⚕️ Doctor profile management
- 👨‍💼 Admin user management

## Technology Stack 🛠️

### Frontend & Dashboard
- React.js with Vite
- Modern UI/UX design
- Responsive layouts
- State management
- REST API integration

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- RESTful API architecture

## Getting Started 🚀

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/ravi13ravi/HealthcareManagementSystem.git
cd HealthcareManagementSystem
\`\`\`

2. Install Backend Dependencies
\`\`\`bash
cd backend
npm install
\`\`\`

3. Install Frontend Dependencies
\`\`\`bash
cd ../frontend
npm install
\`\`\`

4. Install Dashboard Dependencies
\`\`\`bash
cd ../dashboard
npm install
\`\`\`

5. Configure Environment Variables
- Create \`config.env\` in the backend/config directory
- Add necessary environment variables:
  - MONGODB_URI
  - JWT_SECRET
  - PORT

### Running the Application

1. Start Backend Server
\`\`\`bash
cd backend
npm run start
\`\`\`

2. Start Frontend Application
\`\`\`bash
cd frontend
npm run dev
\`\`\`

3. Start Dashboard Application
\`\`\`bash
cd dashboard
npm run dev
\`\`\`

## Project Structure 📁

\`\`\`
backend/           # Backend API server
├── config/        # Configuration files
├── controller/    # Request handlers
├── database/      # Database connection
├── middlewares/   # Custom middlewares
├── models/        # Database models
├── router/        # API routes
└── utils/         # Utility functions

frontend/          # Patient portal
├── public/        # Static assets
└── src/          
    ├── components/# React components
    └── Pages/     # Page components

dashboard/         # Admin dashboard
├── public/        # Static assets
└── src/
    └── components/# Dashboard components
\`\`\`

## API Endpoints 🔌

### User Routes
- POST /api/users/register
- POST /api/users/login
- GET /api/users/profile

### Appointment Routes
- POST /api/appointments/create
- GET /api/appointments/list
- PUT /api/appointments/:id

### Message Routes
- POST /api/messages/send
- GET /api/messages/inbox
- GET /api/messages/:id



## Contact 📧

Ravi - [@ravi13ravi](https://github.com/ravi13ravi)

Project Link: [https://github.com/ravi13ravi/HealthcareManagementSystem](https://github.com/ravi13ravi/HealthcareManagementSystem)
