import React from "react";
import { HomePageCard as Card } from "../HomePageCard";
import city_logo from "../images/city_logo.svg";
import language_logo from "../images/language_logo.png";
import POI_logo from "../images/POI_logo.png";

let Home = () => {
    return (
        <div>
            <h1>City Info</h1>
            <p>Welcome to City Info. This website provides information about cities around the world.</p>
            <p>Use the links below to navigate to different sections of the website.</p>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 my-2">
                        <Card title="Points of Interest" link="/PointsOfInterest" image_src={ POI_logo } description="Custom message for POI"/>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card title="Cities" link="" image_src={ city_logo } image_placement="top" image_alt="Picture of a city"/>
                    </div>
                    <div className="col-md-4 my-2">
                        <Card title="Languages" link="" image_src={ language_logo }/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
