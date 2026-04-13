import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './valueSlice.jsx';
import { swapiReducer } from "../redux/swapi.reducer.jsx";

export default configureStore({
    reducer: {
        value: valueReducer,
        swapi: swapiReducer
    }
})