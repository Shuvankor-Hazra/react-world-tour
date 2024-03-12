import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";
// eslint-disable-next-line react/prop-types
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  // eslint-disable-next-line react/prop-types
  const { name, capital, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handleVisitedCountry);

  return (
    <div className="country">
      <img src={flags.png} alt="" />
      <h2>
        Country Name : <small>{name?.common}</small>
      </h2>
      <h3>
        Capital City : <small>{capital}</small>
      </h3>
      <p>Population : {population}</p>
      <p>Area : {area}</p>
      <p>Code : {cca3}</p>

      <button onClick={() => handleVisitedCountry(country)} className="btn">
        Mark Visited
      </button>
      <br />
      <br />

      <button
        onClick={() => handleVisitedFlags(country.flags.png)}
        className="btn"
      >
        Add Flag
      </button>
      <br />
      <br />

      <button onClick={handleVisited} className="btn">
        {visited ? "Visited" : "Going"}
      </button>
      {visited ? "I have visited this country." : "I want to visit."}
      <br />
      <br />

      <CountryDetails
        country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountryDetails>
    </div>
  );
};

export default Country;
