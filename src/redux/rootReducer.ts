import { combineReducers } from "redux";

import cityReducer from "./saveCityName/reducer";

export const rootReducer = combineReducers({ cityReducer });
