import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <Search className="search-icon" size={20} />
      <input 
        type="text" 
        className="search-input"
        placeholder="Search employees by name or department..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
