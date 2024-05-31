import React from "react";
import { Button, Spinner } from "react-bootstrap";
import CountriesCards from "./CountriesCards";
import $ from "jquery";
import { useEffect, useState } from "react";

let Countries = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    let countries: any;
    $.ajax({
      url: "https://cityinfo.buchwaldshave34.dk/api/Country",
      type: "GET",
      success: function (data) {
        countries = [];
        data.forEach((city: any) => {
          countries.push(city);
        });
        console.log(countries);
      },
      error: function (error) {
        console.log(error);
      },
    }).then(() => {
      setCountries(countries);
    });
  }, []);
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <h1>Countries</h1>
          <p>
            Welcome to the Countries page. This page provides information about
            countries around the world.
          </p>
        </div>
        {countries === undefined ? (
        <div style={{position:"absolute", left:"50%", top:"50%"}}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <CountriesCards countries={countries} />
      )}
      </div>
    </div>
  );
};

export default Countries;
