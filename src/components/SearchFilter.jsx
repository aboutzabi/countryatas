const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const shortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(shortCountry);
  };
  return (
    <div className="search-filter">
      <div className="search">
        <input
          type="text"
          placeholder="Serach a Country"
          onChange={handleInputChange}
        />
      </div>
      <div className="sort">
        <button onClick={() => sortCountries("asc")}>Asc</button>
        <button onClick={() => sortCountries("desc")}>Desc</button>
      </div>
      <div className="filter">
        <select name="" id="" onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
