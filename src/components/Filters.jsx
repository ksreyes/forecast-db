import './Filters.css';
import FilterCountry from './FilterCountry.jsx';
import FilterIndicator from './FilterIndicator.jsx';
import FilterLead from './FilterLead.jsx';

function Filters({ filters, setFilters }) {


    return (
        <div
            className="filters fill-blue pad-t-5 pad-b-5 pad-x-5 flex-col"
        >
            <div>
                <h2 className="mgn-b-4 text-white text-size-2 text-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
            </div>
            <div className="filters-container flex-row col-gap-2">
                <FilterCountry
                    filters={filters} 
                    setFilters={setFilters}
                />
                <FilterIndicator 
                    filters={filters} 
                    setFilters={setFilters}
                />
                <FilterLead 
                    filters={filters}
                    setFilters={setFilters}
                />
            </div>
        </div>
    )
}

export default Filters;