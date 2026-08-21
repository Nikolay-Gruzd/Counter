import {createAction, createReducer} from "@reduxjs/toolkit";

export const setErrorAC = createAction<{error: string}>('error/setError')

const initialState: string = ''

export const errorReducer = createReducer(initialState, builder => {
    builder
        .addCase(setErrorAC, (state, action) => {
            return state = action.payload.error
        })
})