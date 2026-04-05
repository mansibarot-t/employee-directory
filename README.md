# 🏢 Employee Directory Search System

[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=flat&logo=sqlalchemy)](https://www.sqlalchemy.org/)

A robust, modern internal tool designed to search and view employee records efficiently. Built with a focus on performance, clean architecture, and a premium user experience.

---

## ✨ Features

- **🔍 Intelligent Search**: Fast, debounced search across multiple fields including **Name**, **Department**, **Designation**, and **Email**.
- **🚀 Performance Optimized**: Frontend debouncing reduces backend API traffic by up to 90% during active typing.
- **💎 Glassmorphic UI**: High-end aesthetic with smooth transitions, interactive cards, and responsive layout.
- **🛠️ Clean Architecture**: Separated concerns with FastAPI Routers, Pydantic Schemas, and SQLAlchemy Services.
- **📦 Scalable Database**: Connection pooling and optimized queries for efficient MySQL interaction.

---

## 📂 Project Structure

```text
emp-dir/
├── 📁 frontend/           # React + Vite (TypeScript)
│   ├── 📁 src/
│   │   ├── 📁 components/ # Premium UI Components
│   │   └── 📁 services/   # API Clients
├── 📁 backend/            # FastAPI (Python 3.13 Ready)
│   ├── 📁 routers/        # Endpoint Definitions
│   ├── 📁 services/       # Business Logic
│   └── 📁 models/         # SQLAlchemy Schemas
└── 📁 docs/               # Detailed Documentation
```

---

## ⚡ Quick Start

### 1. Prerequisites
- **Python 3.11+**
- **Node.js 18+**
- **MySQL Server**

### 2. Backend Setup
```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```
### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 📚 Documentation

Detailed documentation for deeper understanding:

- [🏗️ Architectural Deep Dive](file:///c:/Users/admin/OneDrive/Desktop/projects/emp-dir/docs/ARCHITECTURE.md)
- [🔌 API Documentation](file:///c:/Users/admin/OneDrive/Desktop/projects/emp-dir/docs/API_DOCUMENTATION.md)
- [🤝 Contributing Guide](file:///c:/Users/admin/OneDrive/Desktop/projects/emp-dir/docs/CONTRIBUTING.md)

---

## 🛡️ License

This project is intended for internal use and is private.
