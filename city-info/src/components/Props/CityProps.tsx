export interface CityListProps {
  cities: City[];
}

export interface City {
  cityId: number;
  cityLanguages: [languageId: number, languageName: string];
  country: Country;
  countryID: number;
  description: string;
  name: string;
  numberOfPointsOfInterest: number;
  pointsOfInterest: [
    pointOfInterestId: number,
    cityId: number,
    name: string,
    description: string
  ];
}

interface Country {
    countryID: number;
    countryName: string;
}