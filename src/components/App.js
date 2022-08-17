import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleFindPets() {
    let url;
    if (filters.type === "all") {
      url = "http://localhost:3001/pets";
    } else {
      url = `http://localhost:3001/pets?type=${filters}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setPets(data))
      .catch(e => console.error(e));
  }

  function handleAdoptPet(updatedId) {
    setPets(pets => pets.map(pet => {
      if (pet.id === updatedId) {
        return {...pet, isAdopted: true}
      } else {
        return pet;
      }
    }))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={setFilters} filters={filters} onFindPetsClick={handleFindPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
