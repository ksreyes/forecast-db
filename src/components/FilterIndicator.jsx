function FilterIndicator({ filters, setFilters }) {
  
  const options = ["Drought", "Flood"];

  const handleChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      indicator: event.target.value,
    }));
  };

  return (
    <div className="filter">
      <h2 className="filter-label">Indicator</h2>
      <div className="flex-row col-gap-2">
        {options.map((option) => (
          <label key={option} className="mgn-t-1 mgn-r-1">
            <input
              type="radio"
              name="option"
              value={option}
              checked={filters.indicator === option}
              onChange={handleChange}
              className="mgn-r-1"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterIndicator;