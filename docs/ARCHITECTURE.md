# 🏗️ Architectural Deep Dive

This document details the architectural decisions and patterns implemented in the Employee Directory Search System.

---

## 🏛️ Overall Concept

The system follows a **Separation of Concerns** principle, dividing the application into three primary layers:
1.  **Frontend (Presentation Layer)**: Handles UI, user interaction, and state management.
2.  **Backend (Application Layer)**: Manages business logic, request validation, and API endpoints.
3.  **Database (Persistence Layer)**: Handles data storage, indexing, and retrieval.

---

## 🛠️ Backend (FastAPI)

The backend is built using **FastAPI**, adhering to a "Clean Architecture" style.

### 1. Data Models (`models.py`)
Uses **SQLAlchemy ORM** to define the database schema. The `Employee` model includes indices on frequently searched columns (`name`, `email`, `department`) to ensure fast query execution.

### 2. Validation Schemas (`schemas.py`)
Uses **Pydantic** for double-layered validation:
-   **Request Validation**: Ensures incoming data matches expected types.
-   **Response Validation**: Filters and serializes data before sending it back to the client.

### 3. Business Services (`services/employee_service.py`)
Isolated logic for database interactions. This layer prevents "Fat Controllers" by handling the actual SQLAlchemy query logic separately from the routing logic.

### 4. API Routers (`routers/employees.py`)
Handles HTTP requests, dependency injection (DB sessions), and returns standardized JSON responses.

---

## 🎨 Frontend (React + Vite)

The frontend is a modern SPA (Single Page Application) optimized for speed and user experience.

### 1. Performance Optimization (Debouncing)
To prevent overwhelming the server during typing, the search feature uses a **300ms debounce**. 
-   A timer is reset on every keystroke.
-   The API is only called after the user pauses for 300ms.
-   This significantly improves performance and reduces network overhead.

### 2. State Management
Uses standard React hooks (`useState`, `useEffect`) for simple, predictable state flow. Global API state (Loading, Error, Results) is managed at the top-level `App.tsx` and passed down to functional components.

### 3. Styling & Aesthetics
-   **CSS Variables**: Defined in `index.css` for a centralized theme (color palettes, radius, etc.).
-   **Glassmorphism**: Uses `backdrop-filter: blur()` and semi-transparent backgrounds for a premium, modern feel.
-   **Animations**: CSS `@keyframes` are used for entry animations and interactive state changes.

---

## 🗄️ Database (MySQL)

### Connection Pooling
The system uses SQLAlchemy's connection pooling to maintain a persistent set of connections to the MySQL server.
-   `pool_size=10`: Keeps 10 connections always ready.
-   `max_overflow=20`: Allows up to 20 additional temporary connections during high load.
-   `pool_pre_ping=True`: Automatically detects and recycles "stale" connections.

---

## 🐍 Python 3.13 Compatibility
The project is explicitly tested with **Python 3.13**. Due to internal changes in Python 3.13's `typing` module, we require `SQLAlchemy>=2.0.36` to avoid initialization errors.
