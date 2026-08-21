import {RootState} from "../app/store.ts";
import {SettingType} from "../components/Setting/Setting.tsx";

export const selectSetting = (state: RootState): SettingType => state.setting;