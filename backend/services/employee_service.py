from sqlalchemy.orm import Session
from sqlalchemy import or_
from typing import List, Optional
import models

def search_employees(db: Session, query: Optional[str] = None) -> List[models.Employee]:
    if not query:
        return []
    
    # Efficient search using LIKE with indices
    search_pattern = f"%{query}%"
    return db.query(models.Employee).filter(
        or_(
            models.Employee.name.ilike(search_pattern),
            models.Employee.department.ilike(search_pattern),
            models.Employee.designation.ilike(search_pattern),
            models.Employee.email.ilike(search_pattern)
        )
    ).limit(50).all() # Limit results to ensure efficiency
