import {FETCH_START, FETCH_ERROR, FETCH_SUCCESS, CLEAR_DATA} from "./swapi.types.jsx";

export const fetchStart = () => ({type: FETCH_START});
export const fetchSuccess = (data) => ({type: FETCH_SUCCESS, payload: data});
export const fetchError = (error) => ({type: FETCH_ERROR, payload: error});
export const clearData = () => ({type: CLEAR_DATA});