import {createSlice} from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
    },
    reducers: {
        addTasks: (state, action) => {
            state.tasks.push(action.payload);
        },
    }
})
export const selectTasks = (state) => state.tasks.tasks;
export const { addTasks } = tasksSlice.actions;
export default tasksSlice.reducer;