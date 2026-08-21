import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "../model/counter-reducer.ts";
import {settingReducer} from "../model/setting-reducer.ts";
import {errorReducer} from "../model/error-reducer.ts";

const rootReducer = combineReducers({
    counter: counterReducer,
    setting: settingReducer,
    error: errorReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store