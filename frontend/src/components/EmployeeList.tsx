import React from 'react';
import type { Employee } from '../services/api';
import { EmployeeCard } from './EmployeeCard';
import './EmployeeList.css';

interface Props {
  employees: Employee[];
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

export const EmployeeList: React.FC<Props> = ({ employees, isLoading, error, hasSearched }) => {
  if (isLoading) {
    return (
      <div className="state-container">
        <div className="loader"></div>
        <p>Searching employees...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-container error">
        <p>{error}</p>
      </div>
    );
  }

  if (hasSearched && employees.length === 0) {
    return (
      <div className="state-container empty">
        <p>No employees found. Try a different name or department.</p>
      </div>
    );
  }

  return (
    <div className="employee-grid">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};
