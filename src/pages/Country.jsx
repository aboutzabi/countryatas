import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/SearchFilter";

const Country = () => {
  const [isPending, StartTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    StartTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);
  if (isPending) return <h1>Loading...</h1>;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") {
      return country;
    }
    return country.region === filter;
  };

  const filterCountry = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="countries-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul>
        {filterCountry.map((country, index) => {
          return <CountryCard country={country} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
