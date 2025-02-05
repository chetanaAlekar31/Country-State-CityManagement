import React from "react";
import CityList from "./CityList";

const StateList = ({ countryIndex, countries, setCountries }) => {
    const addState = () => {
        const name = prompt("Enter state name:");
        if (name) {
            const updatedCountries = [...countries];
            updatedCountries[countryIndex].states.push({ name, cities: [] });
            setCountries(updatedCountries);
        }
    };

    const deleteState = (stateIndex) => {
        if (window.confirm("Are you sure you want to delete this state?")) {
            const updatedCountries = [...countries];
            updatedCountries[countryIndex].states.splice(stateIndex, 1);
            setCountries(updatedCountries);
        }
    };

    return (
        <div className="state-container">
            <button className="btn" onClick={addState}>Add State</button>
            {countries[countryIndex].states.map((state, stateIndex) => (
                <div key={stateIndex} className="card">
                    <h3>{state.name}</h3>
                    <button className="btn delete" onClick={() => deleteState(stateIndex)}>Delete</button>
                    <CityList countryIndex={countryIndex} stateIndex={stateIndex} countries={countries} setCountries={setCountries} />
                </div>
            ))}
        </div>
    );
};

export default StateList;