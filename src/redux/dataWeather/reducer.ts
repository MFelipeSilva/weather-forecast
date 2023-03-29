import { Reducer } from "redux";
import { WeatherState, weatherTypes } from "./types";

const initialState: WeatherState = {
  data: [],
  error: false,
  loading: false,
};

const weatherReducer: Reducer<WeatherState> = (state = initialState, action) => {
  switch (action.type) {
    case weatherTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case weatherTypes.STORE_WEATHER:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case weatherTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    
    default:
      return state;
  }
}

export default weatherReducer;