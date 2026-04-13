import {FETCH_START, FETCH_ERROR, FETCH_SUCCESS, CLEAR_DATA} from "./swapi.types.jsx";

const initialState = {
    data: null,
    loading: false,
    error: null,
}

export function swapiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_START:
            return {...state, loading: true, error: null};
        case FETCH_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case FETCH_ERROR:
            return {...state, loading: false, error: action.payload, data: null};
        case CLEAR_DATA:
            return {...state, loading: false, error: null, data: null};
        default: return state;
    }
}
