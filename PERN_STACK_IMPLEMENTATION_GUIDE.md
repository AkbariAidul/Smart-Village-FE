# PERN STACK IMPLEMENTATION GUIDE
## Smart Village System - Technical Architecture

---

## 🏗️ PROJECT STRUCTURE

```
smart-village-pern/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── jwt.js
│   │   │   └── env.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── authorization.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── users.js
│   │   │   ├── berita.js
│   │   │   ├── kalender.js
│   │   │   ├── program.js
│   │   │   ├── surat.js
│   │   │   ├── pengaduan.js
│   │   │   ├── partisipasi.js
│   │   │   ├── umkm.js
│   │   │   ├── galeri.js
│   │   │   ├── admin.js
│   │   │   └── superadmin.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── beritaController.js
│   │   │   ├── kalenderController.js
│   │   │   ├── programController.js
│   │   │   ├── suratController.js
│   │   │   ├── pengaduanController.js
│   │   │   ├── partisipasiController.js
│   │   │   ├── umkmController.js
│   │   │   ├── galeriController.js
│   │   │   ├── adminController.js
│   │   │   └── superadminController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Admin.js
│   │   │   ├── Berita.js
│   │   │   ├── Kalender.js
│   │   │   ├── Program.js
│   │   │   ├── Surat.js
│   │   │   ├── Pengaduan.js
│   │   │   ├── Partisipasi.js
│   │   │   ├── UMKM.js
│   │   │   ├── Galeri.js
│   │   │   └── AuditLog.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── emailService.js
│   │   │   ├── fileService.js
│   │   │   ├── notificationService.js
│   │   │   └── reportService.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   └── app.js
│   ├── migrations/
│   │   ├── 001_create_users_table.sql
│   │   ├── 002_create_admins_table.sql
│   │   ├── 003_create_roles_table.sql
│   │   └── ...
│   ├── seeds/
│   │   ├── roles.sql
│   │   ├── permissions.sql
│   │   └── settings.sql
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── UserDashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── SuperAdminDashboard.jsx
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Berita.jsx
│   │   │   ├── Kalender.jsx
│   │   │   ├── Program.jsx
│   │   │   ├── Surat.jsx
│   │   │   ├── Pengaduan.jsx
│   │   │   ├── Partisipasi.jsx
│   │   │   ├── UMKM.jsx
│   │   │   ├── Galeri.jsx
│   │   │   ├── Admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── ManageBerita.jsx
│   │   │   │   ├── ManageKalender.jsx
│   │   │   │   └── ...
│   │   │   └── SuperAdmin/
│   │   │       ├── SuperAdminDashboard.jsx
│   │   │       ├── ManageUsers.jsx
│   │   │       ├── ManageAdmins.jsx
│   │   │       └── ...
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useApi.js
│   │   │   ├── useNotification.js
│   │   │   └── useRole.js
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── NotificationContext.jsx
│   │   │   └── UserContext.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── userService.js
│   │   │   ├── beritaService.js
│   │   │   └── ...
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── tailwind.css
│   │   │   └── ...
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── README.md
```

---

## 🔧 TECH STACK DETAILS

### Backend (Node.js + Express)
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.10.0",
    "sequelize": "^6.35.0",
    "jsonwebtoken": "^9.1.0",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.3.1",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "express-validator": "^7.0.0",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.7",
    "winston": "^3.11.0",
    "express-rate-limit": "^7.1.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.2",
    "jest": "^29.7.0",
    "supertest": "^6.3.3"
  }
}
```

### Frontend (React + Vite)
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "axios": "^1.6.2",
    "zustand": "^4.4.1",
    "react-query": "^3.39.3",
    "tailwindcss": "^3.3.6",
    "react-icons": "^4.12.0",
    "react-hot-toast": "^2.4.1",
    "date-fns": "^2.30.0",
    "recharts": "^2.10.3",
    "react-hook-form": "^7.48.0"
  },
  "devDependencies": {
    "vite": "^5.0.8",
    "@vitejs/plugin-react": "^4.2.1",
    "tailwindcss": "^3.3.6",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  }
}
```

### Database (PostgreSQL)
- Version: 14+
- Connection Pool: pg-pool
- ORM: Sequelize (optional, bisa juga raw queries)

---

## 🔐 AUTHENTICATION FLOW

### JWT Token Structure
```javascript
// Access Token (24 jam)
{
  "iat": 1705507200,
  "exp": 1705593600,
  "id": 1,
  "email": "user@example.com",
  "role": "user"
}

// Refresh Token (7 hari)
{
  "iat": 1705507200,
  "exp": 1706112000,
  "id": 1,
  "type": "refresh"
}
```

### Login Flow
```
1. User submit email + password
2. Backend validate credentials
3. Generate JWT tokens
4. Return tokens + user data
5. Frontend store tokens (localStorage/sessionStorage)
6. Frontend set Authorization header untuk requests berikutnya
7. Backend verify token di setiap request
8. Jika token expired, gunakan refresh token untuk get new access token
```

### Authorization Flow
```
1. Request masuk dengan Authorization header
2. Middleware extract token
3. Verify token signature & expiry
4. Get user role dari token
5. Check permission untuk endpoint
6. Jika authorized, lanjut ke controller
7. Jika tidak, return 403 Forbidden
```

---

## 📊 DATABASE CONNECTION

### Connection Pool Configuration
```javascript
// backend/src/config/database.js
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
```

### Query Helper
```javascript
// backend/src/utils/db.js
const pool = require('../config/database');

const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = { query };
```

---

## 🛡️ MIDDLEWARE STACK

### Authentication Middleware
```javascript
// backend/src/middleware/auth.js
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Token tidak ditemukan' 
    });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ 
      success: false, 
      message: 'Token tidak valid' 
    });
  }
};

module.exports = { verifyToken };
```

### Authorization Middleware
```javascript
// backend/src/middleware/authorization.js
const authorize = (allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: 'Anda tidak memiliki akses' 
      });
    }
    next();
  };
};

module.exports = { authorize };
```

### Error Handler Middleware
```javascript
// backend/src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Terjadi kesalahan pada server',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = { errorHandler };
```

---

## 🎯 ROLE-BASED ROUTING

### Route Protection
```javascript
// backend/src/routes/admin.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const { authorize } = require('../middleware/authorization');
const adminController = require('../controllers/adminController');

// Hanya admin & super admin yang bisa akses
router.get(
  '/dashboard',
  verifyToken,
  authorize(['admin', 'super_admin']),
  adminController.getDashboard
);

// Hanya super admin yang bisa akses
router.get(
  '/users',
  verifyToken,
  authorize(['super_admin']),
  adminController.getUsers
);

module.exports = router;
```

---

## 🎨 FRONTEND ROLE-BASED RENDERING

### Protected Route Component
```javascript
// frontend/src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = ({ children, requiredRoles }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) return <div>Loading...</div>;
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (requiredRoles && !requiredRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
};
```

### Conditional Rendering
```javascript
// frontend/src/components/Navbar.jsx
import { useAuth } from '../hooks/useAuth';

export const Navbar = () => {
  const { user } = useAuth();
  
  return (
    <nav>
      {/* Menu publik */}
      <a href="/">Beranda</a>
      <a href="/berita">Berita</a>
      
      {/* Menu user */}
      {user && user.role === 'user' && (
        <>
          <a href="/surat">Buat Surat</a>
          <a href="/pengaduan">Pengaduan</a>
        </>
      )}
      
      {/* Menu admin */}
      {user && ['admin', 'super_admin'].includes(user.role) && (
        <>
          <a href="/admin/dashboard">Dashboard Admin</a>
          <a href="/admin/berita">Kelola Berita</a>
        </>
      )}
      
      {/* Menu super admin */}
      {user && user.role === 'super_admin' && (
        <>
          <a href="/superadmin/users">Kelola User</a>
          <a href="/superadmin/settings">Pengaturan</a>
        </>
      )}
      
      {/* Auth buttons */}
      {!user ? (
        <>
          <a href="/login">Login</a>
          <a href="/register">Daftar</a>
        </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
};
```

---

## 📱 STATE MANAGEMENT

### Using Zustand
```javascript
// frontend/src/store/authStore.js
import create from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isLoading: false,
  
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setLoading: (isLoading) => set({ isLoading }),
  
  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const response = await api.post('/auth/login', { email, password });
      set({
        user: response.data.user,
        token: response.data.token,
        isLoading: false
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem('token');
  }
}));
```

---

## 🔄 API INTEGRATION

### Axios Instance
```javascript
// frontend/src/services/api.js
import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired, try refresh
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
          { refreshToken }
        );
        localStorage.setItem('token', response.data.token);
        // Retry original request
        return api(error.config);
      } catch (refreshError) {
        // Refresh failed, logout
        useAuthStore.getState().logout();
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
```

---

## 📝 ENVIRONMENT VARIABLES

### Backend (.env)
```
# Database
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=smart_village

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_REFRESH_SECRET=your_refresh_secret_key_here
JWT_EXPIRE=24h
JWT_REFRESH_EXPIRE=7d

# Server
PORT=5000
NODE_ENV=development

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# File Upload
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880

# CORS
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Smart Village Desa Sungai Pitung
```

---

## 🚀 DEPLOYMENT CHECKLIST

### Backend Deployment
- [ ] Setup PostgreSQL database di production
- [ ] Configure environment variables
- [ ] Setup SSL/HTTPS
- [ ] Configure CORS untuk frontend URL
- [ ] Setup logging & monitoring
- [ ] Configure backup database
- [ ] Setup rate limiting
- [ ] Configure email service
- [ ] Test semua endpoints
- [ ] Setup CI/CD pipeline

### Frontend Deployment
- [ ] Build production bundle
- [ ] Configure API URL untuk production
- [ ] Setup CDN untuk static assets
- [ ] Configure caching strategy
- [ ] Setup error tracking
- [ ] Test di berbagai browser
- [ ] Setup analytics
- [ ] Configure SEO

---

## 📊 PERFORMANCE OPTIMIZATION

### Backend
- Database indexing untuk frequently queried columns
- Query optimization & pagination
- Caching strategy (Redis optional)
- Compression middleware (gzip)
- Rate limiting
- Connection pooling

### Frontend
- Code splitting & lazy loading
- Image optimization
- Minification & bundling
- Caching strategy
- Virtual scrolling untuk list besar
- Memoization untuk expensive computations

---

## 🧪 TESTING STRATEGY

### Backend Testing
```javascript
// backend/tests/auth.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Authentication', () => {
  test('POST /api/auth/login - should return token', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(200);
    expect(response.body.data.token).toBeDefined();
  });
});
```

### Frontend Testing
```javascript
// frontend/tests/Login.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../pages/Login';

test('Login form submission', async () => {
  render(<Login />);
  
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' }
  });
  
  fireEvent.click(screen.getByText('Login'));
  
  // Assert
});
```

---

## 📚 DEVELOPMENT WORKFLOW

### Setup Development Environment
```bash
# Clone repository
git clone <repo-url>
cd smart-village-pern

# Backend setup
cd backend
npm install
cp .env.example .env
npm run migrate
npm run seed
npm run dev

# Frontend setup (di terminal baru)
cd frontend
npm install
cp .env.example .env
npm run dev
```

### Git Workflow
```bash
# Feature branch
git checkout -b feature/nama-fitur

# Commit dengan conventional commits
git commit -m "feat: tambah fitur login"

# Push & create PR
git push origin feature/nama-fitur
```

---

**Dokumentasi ini memberikan panduan lengkap untuk implementasi Smart Village dengan PERN stack.**

