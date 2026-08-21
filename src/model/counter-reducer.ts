import {createAction, createReducer} from "@reduxjs/toolkit";

export const counterIncrementAC = createAction<{value: number}>('counter/counterIncrement');

const initialState: number = 0

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(counterIncrementAC, (state, action) => {
            return state = action.payload.value
        })
})