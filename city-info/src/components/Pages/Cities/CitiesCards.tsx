import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Icon } from "../../Icon";
import { Card } from "react-bootstrap";

interface CityCardProps {
  cityName: string;
  country: string;
  description: string;
}

let CityCard = ({ ...props }: CityCardProps) => {
  return (
    <Card className="my-2">
      <Card.Header>
        <Card.Title>{props.cityName}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{props.country}</Card.Text>
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

let CitiesCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <CityCard cityName="City 1" country="Country 1" description="Very butifaull" />
        </div>
        <div className="col-md-4">
          <CityCard cityName="City 2" country="Country 2" description="WuYea" />
        </div>
      </div>
    </div>
  );
};

export default CitiesCards;
