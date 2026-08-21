import {createAction, createReducer} from "@reduxjs/toolkit";
import {SettingType} from "../components/Setting/Setting.tsx";

export const changeSettingAC = createAction<SettingType>('setting/changeSetting');

const initialState: SettingType = {start: 0, max: 5}

export const settingReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeSettingAC, (state, action) => {
            state.start = action.payload.start
            state.max = action.payload.max
        })
})