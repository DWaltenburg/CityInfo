import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";
import { Icon } from "../../Icon";
import { CityListProps, City } from "../../Props/CityProps";

let CityCard = ({ ...props }: City) => {
  return (
    <Card className="my-2">
      <Card.Header>
        <Card.Title>{props.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.country.countryName}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonGroup>
          <Button variant="outline-primary" href="#">
            <Icon iconName="Pencil" /> Edit
          </Button>
          <Button variant="outline-danger" href="#">
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
            <div className="col-md-4">
              <CityCard
                key={city.cityId}
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
