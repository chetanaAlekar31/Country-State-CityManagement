import React from "react";

const CityList = ({ countryIndex, stateIndex, countries, setCountries }) => {
    const addCity = () => {
        const name = prompt("Enter city name:");
        if (name) {
            const updatedCountries = [...countries];
            updatedCountries[countryIndex].states[stateIndex].cities.push(name);
            setCountries(updatedCountries);
        }
    };

    const deleteCity = (cityIndex) => {
        if (window.confirm("Are you sure you want to delete this city?")) {
            const updatedCountries = [...countries];
            updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
            setCountries(updatedCountries);
        }
    };

    return (
        <div className="city-container">
            <button className="btn" onClick={addCity}>Add City</button>
            {countries[countryIndex].states[stateIndex].cities.map((city, cityIndex) => (
                <div key={cityIndex} className="city-card">
                    <p>{city}</p>
                    <button className="btn delete" onClick={() => deleteCity(cityIndex)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CityList;