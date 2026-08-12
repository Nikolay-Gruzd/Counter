// Проверка валидности
import {SettingType} from "../App.tsx";

export const isSettingValid = (setting: SettingType): boolean => {
    return setting.start >= 0 && setting.max >=1 && setting.start < setting.max
}

// Проверка изменений
export const isSettingChanged = (current: SettingType, saved: SettingType): boolean => {
    return current.start !== saved.start || current.max !== saved.max
}

export const getCounterDisplay = (counter: number, setting: SettingType, localValue?: SettingType): string | number => {
    if (!isSettingValid(setting)) return 'incorrect value'
    if (isSettingChanged(setting, localValue || setting)) return 'Enter values and press set'
    return counter
}