export const weatherTypes = {
  LOAD_REQUEST:"weather/LOAD_REQUEST",
  STORE_WEATHER:"weather/STORE_WEATHER",
  LOAD_FAILURE:"weather/LOAD_FAILURE",
};

export interface weatherDB {
  name?: string;
  main?: any;
  weather?: any[];
  humidity?: number;
  wind?: any;
};

export interface WeatherState {
  readonly data: weatherDB[];
  readonly loading: boolean;
  readonly error: boolean;
};