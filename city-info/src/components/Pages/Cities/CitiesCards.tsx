import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Icon } from "../../Icon";
import { CityListProps, City } from "../../Props/CityProps";
import { POIColor, LanguageColor } from "../../Colors";
import { Link } from "react-router-dom";
import { useState } from "react";
import $ from "jquery";

let CityCard = ({ ...props }: any) => {
  return (
    <Card
      // as={Link}
      // to={"/Cities/" + props.cityId}
      className="my-2 normal-text city-card"
    >
      <Card.Header>
        <Card.Title>{props.cityName}</Card.Title>
        <Card.Subtitle>{props.country.countryName}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        {props.cityDescription}
        </Card.Text>
        <div style={{display: "flex", gap:"1rem", justifyContent: "flex-end"}}>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">Languages</Tooltip>
            }
            placement="right"
          >
            <div style={{width: "fit-content"}}>
              {props.cityLanguages?.length}{" "} {/* text as badge??? */}
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
          <Button variant="outline-danger" onClick={() => {props.openAndSetDeleteCityModal(props.cityId, props.cityName)}}> {/* open modal "u sure, brah?" */}
            <Icon iconName="XLg" /> Delete
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};


let DeleteCityModal = ({showModal, handleClose, cityId, cityName}: any) => { 
  let deleteCityById = ()=>{$.ajax({
    url: "https://cityinfo80.buchwaldshave34.dk/api/City/DeleteCity/" + cityId.toString(),
    type: "DELETE",
    success: function (data) {
      console.log("City deleted");
    },
    error: function (error) {
      console.log(error);
    },
  });}

  return (
    <Modal
    show={showModal}
    size="sm"
    centered
    onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Delete City "{cityName}"?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Are you sure you want to delete this city?</h1>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="danger" onClick={function(event){deleteCityById(); handleClose(); window.location.reload(); /*create alert for success*/}}> 
        <Icon iconName="Trash" /> Delete
      </Button>
      <Button variant="secondary" onClick={handleClose}> 
        <Icon iconName="X" /> Cancel
      </Button>
      </Modal.Footer>
    </Modal>
  );
}

let CitiesCards = ({ cities }: CityListProps) => {
  
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [deleteCityId, setDeleteCityId] = useState(0);
  const [deleteCityName, setDeleteCityName] = useState("");
  const openAndSetDeleteCityModal = (cityId: number, cityName: string) => {
    setDeleteCityId(cityId);
    setDeleteCityName(cityName);
    setDeleteModalShow(true);
  }
  if (!cities) {
    return <div>No cities to display</div>;
  }
  return (
    <>
    <div className="container">
      <div className="row">
        {cities.map((city: any) => {
          return (
            <div className="col-md-4" key={city.cityId}>
              <CityCard
                cityId={city.cityId}
                cityLanguages={city.cityLanguages}
                country={city.country}
                countryID={city.countryID}
                cityDescription={city.cityDescription}
                cityName={city.cityName}
                numberOfPointsOfInterest={city.numberOfPointsOfInterest}
                pointsOfInterest={city.pointsOfInterest}
                openAndSetDeleteCityModal={openAndSetDeleteCityModal}
              />
            </div>
          );
        })}
      </div>
    </div>
    <DeleteCityModal showModal={deleteModalShow} handleClose={()=>setDeleteModalShow(false)} cityId={deleteCityId} cityName={deleteCityName}/>
    </>
  );
};

export default CitiesCards;
