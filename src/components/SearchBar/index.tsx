import './SearchBar.css';

interface FilterOption {
  value: string;
  label: string;
}

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  filterValue?: string;
  onFilterChange?: (value: string) => void;
  filterOptions?: FilterOption[];
}

const SearchBar = ({ 
  value, 
  onChange, 
  placeholder, 
  filterValue, 
  onFilterChange, 
  filterOptions 
}: SearchBarProps) => {
  return (
    <div className="search-container-main">
      <div className="search-wrapper">
        <div className="search-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input
          type="text"
          className="custom-search-input"
          placeholder={placeholder || "Buscar no arsenal..."}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="search-border-focus"></div>
      </div>

      {filterOptions && onFilterChange && (
        <div className="filter-wrapper">
          <select 
            className="custom-filter-select"
            value={filterValue}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="filter-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;