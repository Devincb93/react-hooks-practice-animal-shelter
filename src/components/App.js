import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  

  function onAdoptPet(id) {
     const updatedPet = pets.map((pet) => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true };
      }
      return pet
     })
     setPets(updatedPet)
     console.log("clicked", id)
  }

  function onFindPetsClick() {
    if (filters.type == 'all') {
    fetch('http://localhost:3001/pets')
    .then(resp => resp.json())
    .then(data => setPets(data))
    console.log("all", pets)
    console.log(filters)
   }
   else {
    fetch(`http://localhost:3001/pets?type=${filters.type}`)
    .then(resp => resp.json())
    .then(data => setPets(data))
    console.log("selected", pets)
   }
  }

  function onChangeType(e) {
    setFilters({type : e.target.value})
  }
  if (!pets) return <h1>...Loading</h1>

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;