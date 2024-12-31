import  { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getIndivisualCountryData } from "../../api/postApi";
import { NavLink } from "react-router-dom";

const Details = () => {
  const params = useParams();
  console.log(params);

  const [isPending, StartTransition] = useTransition();
  const [country, setCountry] = useState();
  useEffect(() => {
    StartTransition(async () => {
      const res = await getIndivisualCountryData(params.id);
      if (res.status === 200) {
        console.log(res.data);
        setCountry(res.data[0]);
        console.log(country);
      }
    });
  }, []);
  if (isPending) return <h1>Loading...</h1>;
  return (
    <section className="indivisual-country-section">
      {country && (
        <div className="country-flag">
          <div className="contianer">
            <div className="flag">
              <img src={country.flags.svg} alt={country.flags.alt} />
            </div>
            <div className="details-content">
              <h1>{country.name.officail}</h1>
              <div className="info">
                <p>
                  <span>Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(",")}
                </p>
                <p>
                  <span>Population:</span>
                  {country.population}
                </p>
                <p>
                  <span>Region:</span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital:</span>
                  {country.capital}
                </p>
                <p>
                  <span>Top Level Domain:</span>
                  {country.tld[0]}
                </p>

                <p>
                  <span>Currencies:</span>
                  {Object.keys(country.currencies)
                    .map((key) => country.currencies[key].name)
                    .join(",")}
                </p>
                <p>
                  <span>Languages:</span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(",")}
                </p>
              </div>
              <div>
                <NavLink to={"/country"}>
                  <button>Go Back</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Details;
