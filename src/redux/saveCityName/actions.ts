import { cityTypes } from "./types";

export const addCity = (payload: string) => ({
  type: cityTypes.ADD_CITY,
  payload,
});