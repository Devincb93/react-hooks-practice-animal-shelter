import React from "react";

import Pet from "./Pet";

function PetBrowser({ onAdoptPet, pets }) {
  return <div className="ui cards">
    {pets.map((pet, id) => (
    <Pet key={id} pet={pet}  onAdoptPet={onAdoptPet} />))}
    </div>;
}

export default PetBrowser;