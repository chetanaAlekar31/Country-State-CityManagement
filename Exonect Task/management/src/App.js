import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const name = prompt("Enter country name:");
    if (name) {
      setCountries([...countries, { name, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt("Enter new country name:", countries[index].name);
    if (newName) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  const addState = (countryIndex) => {
    const name = prompt("Enter state name:");
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name, cities: [] });
      setCountries(updatedCountries);
    }
  };

  const addCity = (countryIndex, stateIndex) => {
    const name = prompt("Enter city name:");
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(name);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="container">
      <h1>Country, State, and City Management</h1>
      <button className="btn" onClick={addCountry}>Add Country</button>
      <div className="card-container">
        {countries.map((country, countryIndex) => (
          <div className="card" key={countryIndex}>
            <h3>{country.name}</h3>
            <button className="btn add" onClick={() => addState(countryIndex)}>Add State</button>

            <div className="state-container">
              {country.states.map((state, stateIndex) => (
                <div key={stateIndex} className="state-card">
                  <div className="state-name"><strong>{state.name}</strong></div>
                  <button className="btn add" onClick={() => addCity(countryIndex, stateIndex)}>Add City</button>
                  <div className="city-container">
                    {state.cities.map((city, cityIndex) => (
                      <div key={cityIndex} className="city-name"><strong>{city}</strong></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {countries.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Country</th>
              <th>States</th>
              <th>Cities</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index}>
                <td><strong>{country.name}</strong></td>
                <td>
                  {country.states.length > 0 ? (
                    country.states.map((state, stateIndex) => (
                      <div key={stateIndex}><strong>{state.name}</strong></div>
                    ))
                  ) : (
                    <span>No States</span>
                  )}
                </td>
                <td>
                  {country.states.length > 0 ? (
                    country.states.map((state, stateIndex) => (
                      <div key={stateIndex}>
                        {state.cities.length > 0 ? (
                          state.cities.map((city, cityIndex) => (
                            <div key={cityIndex}><strong>{city}</strong></div>
                          ))
                        ) : (
                          <span>No Cities</span>
                        )}
                      </div>
                    ))
                  ) : (
                    <span>No Cities</span>
                  )}
                </td>
                <td>
                  <button className="btn edit" onClick={() => editCountry(index)}>Edit</button>
                  <button className="btn delete" onClick={() => deleteCountry(index)}>Delete</button>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
