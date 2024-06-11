import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Icon } from "../../Icon";
import CitiesCards from "./CitiesCards";
import $ from "jquery";

let Cities = () => {
  const [cities, setCities] = useState();
  useEffect(() => {
    let cities: any;
    $.ajax({
      url: "https://cityinfo80.buchwaldshave34.dk/api/City/GetCities",
      type: "GET",
      success: function (data) {
        cities = [];
        data.forEach((city: any) => {
          cities.push(city);
        });
      },
      error: function (error) {
        console.log(error);
      },
    }).then(() => {
      setCities(cities);
    });
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <h1>Cities</h1>
          <p>
            Welcome to the Cities page. This page provides information about
            cities around the world.
          </p>
          <Button variant="success" href="#/Cities/New" style={{width:"auto", margin:"auto"}}>
            Add New City <Icon iconName="PlusLg" />
          </Button>
        </div>
      </div>
      {cities === undefined ? (
        <div style={{position:"absolute", left:"50%", top:"50%"}}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <CitiesCards cities={cities} />
      )}
    </div>
  );
};
// add pagination for cities cards limit at 12
// add modal for delete confirmation
// add edit page for cities

export default Cities;
