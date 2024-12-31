import data from "../api/countryDtata.json";
import React from "react";

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <h1>
          Here are the interesting Facts <br />
          we're proud of
        </h1>

        <div className="cards">
          {data.map((data) => {
            const { id, country, capital, population, fact } = data;
            return (
              <div className="card" key={id}>
                <h1>{country}</h1>
                <p>
                  <span>Capital:</span>
                  {capital}
                </p>
                <p>
                  <span>Population:</span>
                  {population}
                </p>
                <p>
                  <span>Fact:</span>
                  {fact}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
