import { Button, Form, InputGroup } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import $ from "jquery";
import React, { useState } from "react";
import { City as CityProps } from "../../Props/CityProps";


let CityForm = ({ ...cityObj }: any) => {
    let city: CityProps = cityObj.city? cityObj.city : null;

  const initialField: any[] = [];
  const [languages, setLanguages] = useState(initialField);
  const [pointsOfInterest, setPointsOfInterest] = useState(initialField);
  const [countries, setCountries] = useState(initialField);

  //ajax get countries
  if (countries.length === 0) {
    $.ajax({
      url: "https://cityinfo80.buchwaldshave34.dk/api/Country/GetCountries",
      type: "GET",
      success: function (data) {
        $("#formCountries").empty();
        $("#formCountries").append(
          `<option value=''>Select country</option>` // default value
        );
        data.forEach((country: any) => {
          $("#formCountries").append(
            `<option ${city?.countryID === country.countryID ? "selected":""} value='${country.countryID}'>${country.countryName}</option>`
          );
        });
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  //ajax get languages
  if (languages.length === 0) {
    $.ajax({
      url: "https://cityinfo80.buchwaldshave34.dk/api/Language/GetLanguages",
      type: "GET",
      success: function (data) {
        $("#formLanguages").empty();
        data.forEach((language: any) => {
          $("#formLanguages").append(
            `<option ${city?.cityLanguages.find(x => x.languageId === language.languageId)? "selected":""} value='${language.languageId}'>${language.languageName}</option>`
          );
        });
      },
      error: function (error) {
        console.log(error);
      },
    });
  }
  //ajax get points of interest
  if (pointsOfInterest.length === 0) {
    $.ajax({
      url: "https://cityinfo80.buchwaldshave34.dk/api/PointOfInterest/GetPointOfInterests",
      type: "GET",
      success: function (data) {
        $("#formPointsOfInterest").empty();
        data.forEach((pointOfInterest: any) => {
          $("#formPointsOfInterest").append(
            `<option ${city?.pointsOfInterest.find(x => x.pointOfInterestId === pointOfInterest.pointOfInterestId)? "selected":""} value='${pointOfInterest.pointOfInterestId}'>${pointOfInterest.pointOfInterestName}</option>`
          );
        });
      },
      error: function (error) {
        console.log(error);
      },
    });
  }

  return (
    <Form>
      <FloatingLabel
        className="mb-3"
        controlId="formCityName"
        label="City Name"
      >
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={city?.cityName}
        />
      </FloatingLabel>

      <FloatingLabel
        className="mb-3"
        controlId="formCityDescription"
        label="City Description"
      >
        <Form.Control type="textarea" placeholder="Enter description" value={city?.cityDescription}/>
      </FloatingLabel>

      <FloatingLabel className="mb-3" controlId="formCountries" label="Country">
        <Form.Select
          aria-label="Select country"
          value={countries}
          onChange={(e) =>
            setCountries(
              [].slice
                .call(
                  (e.target as unknown as HTMLSelectElement).selectedOptions
                )
                .map((item: any) => item.value)
            )
          }
        />
      </FloatingLabel>

      <Form.Group className="mb-3" controlId="formLanguages">
        <Form.Label>Languages</Form.Label>
        <Form.Select
          multiple
          value={languages}
          onChange={(e) =>
            setLanguages(
              [].slice
                .call(
                  (e.target as unknown as HTMLSelectElement).selectedOptions
                )
                .map((item: any) => item.value)
            )
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPointsOfInterest">
        <Form.Label>Points of Interest</Form.Label>
        <Form.Select
          multiple
          aria-label="Select points of interest"
          value={pointsOfInterest}
          onChange={(e) =>
            setPointsOfInterest(
              [].slice
                .call(
                  (e.target as unknown as HTMLSelectElement).selectedOptions
                )
                .map((item: any) => item.value)
            )
          }
        />
      </Form.Group>

      <InputGroup>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Button variant="secondary" type="reset">
          Reset
        </Button>
        <Button variant="danger" type="button">
          Cancel
        </Button>
      </InputGroup>
    </Form>
  );
};

export default CityForm;
