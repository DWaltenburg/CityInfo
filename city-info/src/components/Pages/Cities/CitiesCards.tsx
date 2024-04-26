import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Icon } from "../../Icon";
import { CityListProps, City } from "../../Props/CityProps";
import { POIColor, LanguageColor } from "../../Colors";
import { Link } from "react-router-dom";

// TODO: theme cards to the city theme color
let CityCard = ({ ...props }: City) => {
  return (
    <Card
      as={Link}
      to={"/Cities/" + props.cityId}
      className="my-2 normal-text city-card"
    >
      <Card.Header>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.country.countryName}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        {props.description}
        </Card.Text>
        <div style={{display: "flex", gap:"1rem", justifyContent: "flex-end"}}>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">Languages</Tooltip>
            }
            placement="right"
          >
            <div style={{width: "fit-content"}}>
              {props.cityLanguages.length}{" "}
              <Icon iconName="ChatTextFill" color={LanguageColor} />
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Points of Interest
              </Tooltip>
            }
            placement="right"
          >
            <div style={{width: "fit-content"}}>
              {props.numberOfPointsOfInterest}{" "}
              <Icon iconName="PinMapFill" color={POIColor} />
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
  );
};

let CitiesCards = ({ cities }: CityListProps) => {
  if (!cities) {
    return <div>No cities to display</div>;
  }
  return (
    <div className="container">
      <div className="row">
        {cities.map((city: City) => {
          return (
            <div className="col-md-4" key={city.cityId}>
              <CityCard
                cityId={city.cityId}
                cityLanguages={city.cityLanguages}
                country={city.country}
                countryID={city.countryID}
                description={city.description}
                name={city.name}
                numberOfPointsOfInterest={city.numberOfPointsOfInterest}
                pointsOfInterest={city.pointsOfInterest}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CitiesCards;
