
// Проверка валидности
import {SettingType} from "../components/Setting/Setting.tsx";

export const isSettingValid = (setting: SettingType): boolean => {
    return setting.start >= 0 && setting.max >=1 && setting.start < setting.max
}

// Проверка изменений
export const isSettingChanged = (current: SettingType, saved: SettingType): boolean => {
    return current.start !== saved.start || current.max !== saved.max
}

// Получение значения
export const getCounterDisplay = (counter: number, setting: SettingType, localValue?: SettingType): string | number => {
    if (!isSettingValid(setting)) return 'incorrect value'
    if (isSettingChanged(setting, localValue || setting)) return 'Enter values and press set'
    return counter
}

// Получение значения для counter className
export const getCounterClassName = (counter: number, setting: SettingType, localValue: SettingType): string => {
    const display = getCounterDisplay(counter, setting, localValue)
    if (typeof display === 'string') {
        return 'error'
    }
    if (counter === setting.max) {
        return 'limitCounter'
    }
    return ''
}