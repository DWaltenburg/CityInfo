import React from "react";
import CityForm from "./CityForm";

let NewCity = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <h1>New City</h1>
      </div>
      <div className="row">
        <CityForm />
      </div>
    </div>
  );
};

export default NewCity;
