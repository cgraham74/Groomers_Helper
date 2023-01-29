import React from "react";

const PetCard = (props) => {
  const {name, breed, size, gender, vaccinationStatus} = props;
  return (
    <div style={{ width: "18rem" }}>
     
       <h5>{name}</h5> 
          <p>Breed: {breed}</p>
          <p>Size: {size}</p>
          <p>Gender: {gender}</p>
          <p>
            Vaccination Status:{" "}
            {vaccinationStatus ? "Up to date" : "Not up to date"}
          </p>
    </div>
  );
};

export default PetCard;
