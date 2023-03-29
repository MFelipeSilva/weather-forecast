import { combineReducers } from "redux";

import cityReducer from "./saveCityName/reducer";
import weatherReducer from "./dataWeather/reducer";

export const rootReducer = combineReducers({ cityReducer, weatherReducer });
