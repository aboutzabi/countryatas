import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  

  return (
    <li className="country-card">
      <div className="card-wrapper">
        <img src={flags.svg} alt="flag" />
        <div className="country-info">
          <p className="card-title">
            {name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}
          </p>
          <p className="card-description">
            <span>Population:</span> {population}
          </p>
          <p className="card-description">
            <span>Region:</span> {region}
          </p>
          <p className="card-description">
            <span>Capital:</span> {capital[0]}
          </p>

          <NavLink to={`/country/${name.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
