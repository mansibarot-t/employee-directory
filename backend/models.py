from sqlalchemy import Column, Integer, String, Date
from database import Base

class Employee(Base):
    __tablename__ = "employees"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), index=True, nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    department = Column(String(100), index=True, nullable=False)
    designation = Column(String(100), nullable=False)
    date_of_joining = Column(Date, nullable=False)
