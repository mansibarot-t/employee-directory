import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { EmployeeList } from './components/EmployeeList';
import type { Employee } from './services/api';
import { searchEmployees } from './services/api';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // Debounce implementation: Wait 300ms after user stops typing before making API call
    const delayDebounceFn = setTimeout(async () => {
      if (query.trim()) {
        setIsLoading(true);
        setError(null);
        setHasSearched(true);
        try {
          const results = await searchEmployees(query);
          setEmployees(results);
        } catch (err) {
          setError('Failed to fetch employees. Please check your connection.');
          setEmployees([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setEmployees([]);
        setHasSearched(false);
        setError(null);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Directory</h1>
        <p>Find the people you're looking for</p>
      </header>
      
      <main className="app-main">
        <SearchBar value={query} onChange={setQuery} />
        <EmployeeList 
          employees={employees} 
          isLoading={isLoading} 
          error={error} 
          hasSearched={hasSearched}
        />
      </main>
    </div>
  );
}

export default App;
