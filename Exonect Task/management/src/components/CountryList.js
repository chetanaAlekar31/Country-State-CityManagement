import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, setCountries, deleteCountry }) => {
    const editCountry = (index) => {
        const newName = prompt("Edit country name:", countries[index].name);
        if (newName) {
            const updatedCountries = [...countries];
            updatedCountries[index].name = newName;
            setCountries(updatedCountries);
        }
    };

    return (
        <div>
            {countries.map((country, index) => (
                <div key={index} className="card">
                    <h2>{country.name}</h2>
                    <button className="btn edit" onClick={() => editCountry(index)}>Edit</button>
                    <button className="btn delete" onClick={() => deleteCountry(index)}>Delete</button>
                    <StateList countryIndex={index} countries={countries} setCountries={setCountries} />
                </div>
            ))}
        </div>
    );
};

export default CountryList;