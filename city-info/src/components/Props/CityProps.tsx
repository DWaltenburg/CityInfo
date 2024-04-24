export interface CityListProps {
  cities: City[];
}

export interface City {
  cityId: number;
  cityLanguages: CityLanguage[];
  country: Country;
  countryID: number;
  description: string;
  name: string;
  numberOfPointsOfInterest: number;
  pointsOfInterest: PointOfInterest[];
}

interface Country {
    countryID: number;
    countryName: string;
}

interface CityLanguage {
    languageId: number;
    languageName: string;
}

interface PointOfInterest {
    pointOfInterestId: number;
    cityId: number;
    name: string;
    description: string;
}