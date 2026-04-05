import React from 'react';
import type { Employee } from '../services/api';
import { Mail, Building, Briefcase, Calendar } from 'lucide-react';
import './EmployeeCard.css';

interface Props {
  employee: Employee;
}

export const EmployeeCard: React.FC<Props> = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="card-header">
        <div className="avatar">{employee.name.charAt(0).toUpperCase()}</div>
        <div>
          <h3>{employee.name}</h3>
          <p className="designation"><Briefcase size={14} className="icon" /> {employee.designation}</p>
        </div>
      </div>
      <div className="card-body">
        <p><Building size={14} className="icon" /> {employee.department}</p>
        <p><Mail size={14} className="icon" /> {employee.email}</p>
        <p><Calendar size={14} className="icon" /> Joined: {new Date(employee.date_of_joining).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
