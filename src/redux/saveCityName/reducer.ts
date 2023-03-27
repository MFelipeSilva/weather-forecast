import { Reducer } from "redux";
import { cityState, cityTypes } from "./types";

const initialState = {
  city: "",
};

export const cityReducer: Reducer<cityState> = (state = initialState, action) => {
  switch (action.type) {
    case cityTypes.ADD_CITY:
      return { ...state, city: action.payload };

    default:
      return state;
  }
};


