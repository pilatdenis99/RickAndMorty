import React from "react";
import "./Intro.css";
import Navbar from "../components/Navbar/Navbar";
import Image from "./poza.png";

import { Navigate } from "react-router-dom";

const Intro = () => {
  const [goToCards, setgoToCards] = React.useState(false);
  const [goToLocation, setToLocation] = React.useState(false);
  if (goToCards) {
    return <Navigate to="/Characters" />;
  }
  if (goToLocation) {
    return <Navigate to="/location" />;
  }

  return (
    <div className="App">
      <img className="logo" src={Image} alt="horse" />

      <div className="buttons">
        <button className="charac" onClick={() => setgoToCards(true)}>
          Characters
        </button>
        <button className="loc" onClick={() => setToLocation(true)}>
          Location
        </button>
      </div>
    </div>
  );
};

export default Intro;
