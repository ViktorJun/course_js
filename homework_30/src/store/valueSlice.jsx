import {createSlice} from "@reduxjs/toolkit";

export const valueSlice = createSlice({
    name: "value",
    initialState: {
        value: '',
    },
    reducers: {
        addValue: (state, action) => {
            state.value = action.payload;
        },
        clearValue: (state) => {
            state.value = '';
        }
    }
})
export const stateValue = (state) => state.value.value;
export const { addValue,  clearValue} = valueSlice.actions;
export default valueSlice.reducer;