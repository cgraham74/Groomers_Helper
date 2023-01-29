import React from "react";
import PetCard from "./PetCardComponent";
import pets from "./Pets";

const PetList = () => {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetCard pet={pet} key={pet.id} />
      ))}
    </div>
  );
};

export default PetList;
