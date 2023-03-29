import { UseQueryOptions } from "react-query";

export interface Props {
  city: string;
  options?: UseQueryOptions
};

export interface CityProps {
  name: string;
  main: any;
  weather: any[];
  humidity: number;
  wind: any;
};