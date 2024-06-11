//display city info
// display languages
// display countries
// display points of interest
// with link to each

// new city
// edit city

// edit and new reuse same form - edit form is prepopulated

import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Icon } from "../../Icon";
import { City as CityProps } from "../../Props/CityProps";
import $ from "jquery";
import { CityInfo } from "./CityInfo";

let City = () => {
  // get city id from url
  const cityId = window.location.hash.split("/")[2];
  if (cityId === undefined) {
    window.location.href = "#/Cities";
  }
  const [city, setCity] = useState();
  useEffect(() => {
    let city: any;
    $.ajax({
      url: "https://cityinfo80.buchwaldshave34.dk/api/City/GetCity/" + cityId.toString(),
      type: "GET",
      success: function (data) {
        city = data;
      },
      error: function (error) {
        console.log(error);
      },
    }).then(() => {
      setCity(city);
    });
  }, []);
  return (
    <>
      {city === undefined ? (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <CityInfo city={city} />
      )}
    </>
  );
};

export default City;
