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
      url: "https://cityinfo.buchwaldshave34.dk/api/City",
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
      <div className="my-2">
        <h1>Cities</h1>
        <p>
          Welcome to the Cities page. This page provides information about
          cities around the world.
        </p>
        <Button variant="success" href="#/Cities/New">
          Add New City <Icon iconName="PlusLg" />
        </Button>
      </div>
      {cities === undefined ? (
        <div>
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
// add pagination for cities cards
// add modal for delete confirmation
// add edit page for cities

export default Cities;
