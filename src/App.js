import React from "react";
import PriceGuide from "./components/PriceGuide";
import './App.css';
import ClientContactCardComponent from "./components/Client/ClientContactCardComponent";


// the main component
const App = () => {
  

  return (
    <div>
      {/* <PetList /> */}
      <ClientContactCardComponent />
      <PriceGuide />
    </div>
  );
};

export default App;