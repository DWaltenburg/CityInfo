import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Icon } from "../Icon";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { CityColor } from "../Colors";

let CountryCard = ({ ...props }: any) => {
    return (
        <Card className="my-2 normal-text">
            <Card.Header>
                <Card.Title>{props.title}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {" "}
                </Card.Text>
                <div style={{display: "flex", gap:"1rem", justifyContent: "flex-end"}}>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Cities
              </Tooltip>
            }
            placement="right"
          >
            <div style={{width: "fit-content"}}>
              {props.citiesCount}{" "}
              <Icon iconName="HousesFill" color={CityColor} />
            </div>
          </OverlayTrigger>
          </div>
            </Card.Body>
            <Card.Footer>
            <ButtonGroup>
          <Button variant="outline-primary" href="#"> {/* go to edit city page */}
            <Icon iconName="Pencil" /> Edit
          </Button>
          <Button variant="outline-danger" href="#"> {/* open modal "u sure, brah?" */}
            <Icon iconName="XLg" /> Delete
          </Button>
        </ButtonGroup>
            </Card.Footer>
        </Card>
    )
}

let CountriesCards = ({ countries }: any) => {
    if (!countries) {
        return <div>No countries to display</div>;
      }
      return (
        <div className="container">
          <div className="row">
            {countries.map((country: any) => {
              return (
                <div className="col-md-4" key={country.countryID}>
                  <CountryCard
                    ID={country.countryID}
                    title={country.countryName}
                    citiesCount={country.cities.length}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
}
export default CountriesCards;