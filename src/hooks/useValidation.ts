import {SettingType} from "../App.tsx";

export const useValidation = (setting: SettingType) => {
    // вычисляем все возможные ошибки
    const isNegative = setting.start < 0 || setting.max < 0
    const isStartGreaterThanMax = setting.start > setting.max
    const isEqual = setting.start === setting.max

    // общий флаг валидности
    const isValid = !isNegative && !isStartGreaterThanMax && !isEqual

    // функция для получения текста ошибки
    const getError = (): string => {
        if (isNegative) return 'incorrect value'
        if (isStartGreaterThanMax) return 'incorrect value'
        if (isEqual) return 'incorrect value'
        return ''
    }

    // возвращаем все, что сможем использовать
    return {
        isValid, isNegative, isStartGreaterThanMax, isEqual, getError
    }
}