from pydantic import BaseModel, ConfigDict
from datetime import date
from typing import Optional

class EmployeeBase(BaseModel):
    name: str
    email: str
    department: str
    designation: str
    date_of_joining: date

class EmployeeCreate(EmployeeBase):
    pass

class EmployeeResponse(EmployeeBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
