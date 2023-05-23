import React from "react";
import Gender from "../Category/Gender";
import Species from "../Category/Species";
import Status from "../Category/Status";

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
    

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filters;
