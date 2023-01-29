import React, { useState } from "react";
import DogBreeds from "./DogBreeds";


// the main component
const PriceGuide = () => {
  const [dogBreed, setDogBreed] = useState("");
  const [breedPrice, setBreedPrice] = useState("");
  const [dogSize, setDogSize] = useState("");
  const [coatLength, setCoatLength] = useState("");
  const [coatCondition, setCoatCondition] = useState("");
  const [groomingServiceType, setGroomingServiceType] = useState("");
  const [discount, setDiscount] = useState("");

  const handleDogBreedChange = (event) => {
    setDogBreed(event.target.value);
    setBreedPrice(DogBreeds.filter(dogBreed => dogBreed.breed === event.target.value)[0].price);
  };

  const handleDogSizeChange = (event) => {
    setDogSize(event.target.value);
  };

  const handleCoatLengthChange = (event) => {
    setCoatLength(event.target.value);
  };

  const handleCoatConditionChange = (event) => {
    setCoatCondition(event.target.value);
  };

  const handleGroomingServiceTypeChange = (event) => {
    setGroomingServiceType(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };
 
  // This function will calculate the price based on the input
  const calculatePrice = () => {
   let price = 0;
  
    console.log({dogBreed});
    console.log({breedPrice});
 
    // Calculate the price based on the size
    if (dogSize === "small") {
      price += breedPrice * 0.9;
    } else if (dogSize === "medium") {
      price += breedPrice * 1.0;
    } else if (dogSize === "large") {
      price += breedPrice * 1.1;
    }

    // Calculate the price based on the coat length
    if (coatLength === "short") {
      price += 10;
    } else if (coatLength === "medium") {
      price *= 1.0;
    } else if (coatLength === "long") {
      price += 30;
    }

    // Calculate the price based on the coat condition
    if (coatCondition === "great") {
      price += 5;
    } else if (coatCondition === "average") {
      price *= 1.0;
    } else if (coatCondition === "matted") {
      price += 15;
    }

    // Calculate the price based on the grooming service type
    if(groomingServiceType === "nail trim"){
      price += 5;
    } else if (groomingServiceType === "bath") {
      price += 20;
    } else if (groomingServiceType === "light trim") {
      price += 50;
    } else if (groomingServiceType === "full service groom") {
      price += 75;
    }
    // Apply the discount
    if (discount === "3 weeks") {
      price = price - (price *= 0.10);
    } else if (discount === "6 weeks") {
      price = price - (price *= 0.05);
    }

    return price;
  };

  const price = calculatePrice();

  return (
    <div>
      <h4>Price Guide</h4>
      <form>
        <label>
          Dog Breed
          <select onChange={handleDogBreedChange}>
            <option value="">-- Please select --</option>
           { DogBreeds.map((e) =>(    
             <option key={e.id} value={e.breed}>{e.breed}</option>
            ))}
          </select>
        </label>
        <label>
          Dog Size
          <select onChange={handleDogSizeChange}>
            <option value="">-- Please select --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <label>
          Coat Length
          <select onChange={handleCoatLengthChange}>
            <option value="">-- Please select --</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </label>
        <label>
          Coat Condition
          <select onChange={handleCoatConditionChange}>
            <option value="">-- Please select --</option>
            <option value="great">Great</option>
            <option value="average">Average</option>
            <option value="matted">Matted</option>
          </select>
        </label>
        <label>
          Grooming Service Type
          <select onChange={handleGroomingServiceTypeChange}>
            <option value="">-- Please select --</option>
            <option value="nail trim">Nail Trim</option>
            <option value="bath">Bath</option>
            <option value="light trim">Light Trim</option>
            <option value="full service groom">Full Service Groom</option>
          </select>
        </label>
        <label>
          Discount
          <select onChange={handleDiscountChange}>
            <option value="">-- Please select --</option>
            <option value="none">No discount</option>
            <option value="3 weeks">3 weeks (10%)</option>
            <option value="6 weeks">6 weeks (5%)</option>
          </select>
        </label>
      </form>
      <p>Price: {price}</p>
    </div>
  );
};

export default PriceGuide;