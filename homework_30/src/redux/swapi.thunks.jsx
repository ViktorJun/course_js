import {fetchStart, fetchError, fetchSuccess} from "./swapi.actions.jsx";
import {START_WIDTH_LINK} from "../variables.jsx";

export const fetchSwapi = (endpoint) => async (dispatch) => {
    try{
        dispatch(fetchStart());
        const response = await fetch(START_WIDTH_LINK + endpoint);
        if (!response.ok) {
            throw new Error(`Not Found: ${response.status}`);
        }
        const data = await response.json();
        dispatch(fetchSuccess(data));
    }catch(error){
        dispatch(fetchError(error.message));
    }
}
