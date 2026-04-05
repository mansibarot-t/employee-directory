# 🔌 API Documentation

This document describes the API endpoints exposed by the Employee Directory backend.

---

## 🌐 Base URL

All requests are made to the backend server. The URL is configurable via environment variables in the frontend.

-   **Development**: `http://localhost:8000`
-   **Production**: Defined in `VITE_API_BASE_URL`

---

## 📋 Endpoints

### 1. Search Employees
Retrieves a list of employees filtered by a search query.

-   **URL**: `/employees/`
-   **Method**: `GET`
-   **Authentication**: None (Internal Tool)

#### Query Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `search` | `string` | **Yes** | The search term (min 1 character). Matches against Name, Department, Designation, or Email. |

#### Success Response
-   **Status Code**: `200 OK`
-   **Content**: A JSON array of employee objects.

```json
[
  {
    "id": 1,
    "name": "Arshia Sharma",
    "email": "arshia@example.com",
    "department": "IT",
    "designation": "Staff Engineer",
    "date_of_joining": "2023-01-15"
  }
]
```

#### Error Responses
-   **Status Code**: `400 Bad Request`
    -   Reason: Empty search query.
-   **Status Code**: `500 Internal Server Error`
    -   Reason: Database connection failure or unexpected server error.

---

## 🩺 System Health

-   **URL**: `/health`
-   **Method**: `GET`
-   **Description**: Returns simple status information to verify the server is alive.

```json
{
  "status": "healthy"
}
```

---

## 🛠️ Auto-Generated Documentation

FastAPI automatically provides interactive documentation pages:
-   **Swagger UI**: `http://localhost:8000/docs`
-   **ReDoc**: `http://localhost:8000/redoc`
