import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Icon } from "../Icon";

let CountryCard = ({ ...props }: any) => {
    return (
        <Card className="my-2 normal-text">
            <Card.Header>
                <Card.Title>{props.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.description}
                </Card.Text>
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
                    name={country.countryID}
                    description={country.countryName}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
}
export default CountriesCards;