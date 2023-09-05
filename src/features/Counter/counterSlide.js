import {createSlice} from "@reduxjs/toolkit";

const counterSlide = createSlice({
    name: 'counter', //cần thiết
    initialState: 0, // cần thieets
    reducers: { //cần thiết
        increase(state, action) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
    }
});

const {actions, reducer} = counterSlide;
export const {increase, decrease} = actions; // named export
export default reducer; // default export