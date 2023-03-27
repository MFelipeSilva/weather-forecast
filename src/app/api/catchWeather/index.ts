import api from "../config";
import { createKey } from "./keys";

import { Props } from "./types";
import { useQuery } from "react-query";

import { UseQueryOptions } from "react-query";


export const useWeatherAPI = (city: string) => {
  return useQuery(createKey(city), () => api.get(`weather?q=${city}&units=metric&appid=ad803b063baf3041a3ccdf9465e86115&lang=pt_br`).then((response) => response.data))
};