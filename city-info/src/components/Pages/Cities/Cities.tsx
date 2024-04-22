import React from "react";
import { Button } from "react-bootstrap";
import { Icon } from "../../Icon";
import CitiesCards from "./CitiesCards";

let Cities = () => {
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
      <CitiesCards />
    </div>
  );
};
// add pagination for cities cards
// add modal for delete confirmation
// add edit page for cities

export default Cities;
