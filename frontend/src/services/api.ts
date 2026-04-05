import axios from 'axios';

// The baseUrl is driven by an environment variable.
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
  date_of_joining: string;
}

export const searchEmployees = async (query: string): Promise<Employee[]> => {
  if (!query.trim()) {
      return [];
  }
  const response = await apiClient.get<Employee[]>('/employees/', {
    params: { search: query }
  });
  return response.data;
};
