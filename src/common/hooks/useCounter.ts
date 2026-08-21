import {useState} from "react";
import {isSettingValid} from "../../utils/helpers.ts";
import {ERROR_MESSAGES} from "../../constants";
import {SettingType} from "../../components/Setting/Setting.tsx";

export const useCounter = (initialValue: SettingType) => {
    // Все состояния в одном месте
    const [counter, setCounter] = useState<number>(initialValue.start)
    const [error, setError] = useState<string>('')
    const [setting, setSetting] = useState<SettingType>(initialValue)

    // Логика инкремента
    const increment = () => {
        if(!isSettingValid(setting)) {
            setError(ERROR_MESSAGES.INCORRECT)
            return
        }
        if (counter < setting.max) {
            setCounter(counter => counter + 1)
            setError('')
        }
    }

    // Логика ресета
    const reset = () => {
        if(!isSettingValid(setting)) {
            setError(ERROR_MESSAGES.INCORRECT)
            return
        }
        setCounter(setting.start)
        setError('')
    }

    // Обновление настроек
    const updateSetting = (newSetting: SettingType) => {
        setSetting(newSetting)
        setCounter(newSetting.start)
    }

    // Возвращаем только то, что нужно снаружи
    return {
        counter, setCounter, error, setError, setting, setSetting, increment, reset, updateSetting,
    }
}