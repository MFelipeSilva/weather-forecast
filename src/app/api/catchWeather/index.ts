import api from "../config";
import { createKey } from "./keys";
import { CityProps } from "./types";

import { useQuery, UseQueryOptions } from "react-query";


export const useWeatherAPI = (city: string, options?: UseQueryOptions) => {
  return useQuery(createKey(city), () => api.get<CityProps>(`weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}&lang=pt_br`).then((response) => response.data));
  options;
};