import {useEffect, useState} from "react";
import {SettingType} from "../../components/Setting/Setting.tsx";

export const useLocalStorage = (key: string, initialValue: SettingType) => {
    // Ленивая инициализация - вызывается только 1 раз
    const [localValue, setLocalValue] = useState<SettingType>(() => {
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : initialValue
    })

    // Автоматическое сохранение при изменении
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(localValue))
    }, [localValue, key])

    return { localValue, setLocalValue }
}