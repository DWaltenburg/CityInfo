import React from 'react';
import { City as CityProps } from '../../Props/CityProps';


export let CityInfo = ({ ...cityObj }: any) => {
    let city: CityProps = cityObj.city;
    return (
        <div>
            <div className="my-2">
                <h1>{city.name}</h1>
                <p>
                    {city.description}
                </p>
            </div>
            <div>
                <h2>Languages</h2>
                <ul>
                    {city.cityLanguages.map((language: any) => {
                        return <li key={language.languageId}>{language.languageName}</li>
                    })}
                </ul>
            </div>
            <div>
                <h2>Country</h2>
                <p>{city.country.countryName}</p>
            </div>
            <div>
                <h2>Points of Interest</h2>
                <ul>
                    {city.pointsOfInterest.map((pointOfInterest: any) => {
                        return <li key={pointOfInterest.pointOfInterestId}>{pointOfInterest.name}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}