import { weatherTypes, weatherDB } from "./types";

export const loadRequest = () => ({
  type: weatherTypes.LOAD_REQUEST,
});
export const storeWeather = (payload: weatherDB | undefined ) => ({
  type: weatherTypes.STORE_WEATHER,
  payload,
});
export const loadFailure = () => ({
  type: weatherTypes.LOAD_FAILURE,
});