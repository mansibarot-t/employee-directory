from fastapi import APIRouter, Depends, Query, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
from typing import List, Optional
from database import get_db
import schemas
from services import employee_service

router = APIRouter(
    prefix="/employees",
    tags=["employees"]
)

@router.get("/", response_model=List[schemas.EmployeeResponse])
def get_employees(
    search: Optional[str] = Query(None, min_length=1, description="Search query for name, department, designation, or email"),
    db: Session = Depends(get_db)
):
    if not search or not search.strip():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Search query cannot be empty."
        )

    try:
        results = employee_service.search_employees(db, search.strip())
        return results
    except SQLAlchemyError as e:
        # Proper error handling for DB failure
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database connection failure or query error."
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred."
        )
