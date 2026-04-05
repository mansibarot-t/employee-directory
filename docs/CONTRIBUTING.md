# 🤝 Contributing Guide

Thank you for your interest in improving the Employee Directory! This guide provides instructions on how to set up your environment and submit changes.

---

## 🛠️ Local Development Workflow

### 📋 Prerequisites
Ensure you have the following installed:
-   **Python 3.11+**
-   **Node.js 18+**
-   **Git**

### 🚀 Getting Started
1.  **Fork** and **Clone** the repository.
2.  Follow the **Setup Instructions** in the root [README.md](file:///c:/Users/admin/OneDrive/Desktop/projects/emp-dir/README.md).
3.  Create a new branch for your feature or fix.

### 🧪 Database Setup
If you need to test with fresh data, ensure your MySQL server has the `employee_db` created. The backend will automatically create the tables on startup via `models.Base.metadata.create_all()`.

---

## 🎨 Style Guidelines

### Python (Backend)
-   Follow **PEP 8**.
-   Use **Pydantic models** for all request/response serialization.
-   Ensure **docstrings** are added to complex service functions.
-   Keep routers lean; move logic to services.

### TypeScript (Frontend)
-   Use **Functional Components** with hooks.
-   Always use **TypeScript** for props and data models.
-   Favor **Type-only imports** for models (`import type { ... }`).
-   Style components using their dedicated `.css` modules.

---

## 📤 Submitting Changes

1.  **Lint** your code before submitting.
2.  Ensure both frontend and backend start up correctly.
3.  Write clear, concise commit messages.
4.  Submit a Pull Request detailed with what you changed and why.

---

## 📝 Adding New Employees
Currently, employees are added directly to the database. In a future version, an Admin interface will be provided. To manually add an employee:
```sql
INSERT INTO employees (name, email, department, designation, date_of_joining)
VALUES ('New Employee', 'new@example.com', 'Engineering', 'Developer', '2024-04-04');
```
