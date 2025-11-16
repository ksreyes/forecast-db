export default function FilterCountry({ filters, setFilters }) {
    const options = [
        "Ethiopia", 
        "Mozambique", 
        "Niger",
        "Nigeria",
        "Zimbabwe"
    ];

    const handleChange = (event) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            country: event.target.value,
        }));
    };

  return (
    <div className="filter country-filter">
        <h2 htmlFor="country-filter" className="filter-label block">
            Country
        </h2>

        <select
            id="country-filter"
            value={filters.country}
            onChange={handleChange}
            className="mgn-t-1"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  );
}
