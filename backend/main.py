from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import employees
from database import Base, engine
import models

# Create tables if they do not exist
# Note: For production, we should use Alembic for migrations instead.
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Employee Directory API",
    description="Internal tool to search and view employees.",
    version="1.0.0"
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(employees.router)

@app.get("/health")
def health_check():
    return {"status": "healthy"}

# To run: uvicorn main:app --reload
