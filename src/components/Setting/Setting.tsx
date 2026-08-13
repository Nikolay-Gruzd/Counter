import s from './Setting.module.css'
import {useValidation} from "../../hooks/useValidation.ts";
import {ChangeEvent} from "react";
import {ERROR_MESSAGES} from "../../constants";

export type SettingType = {
    max: number,
    start: number
}
type SettingProps = {
    setting: SettingType,
    setSetting: (value: SettingType) => void,
    setCounter: (value: number) => void,
    setError: (value: string) => void,
    localValue?: SettingType
}

export const Setting = ({setting, setSetting, setCounter, setError,localValue}: SettingProps) => {
debugger
    const {isValid} = useValidation(setting)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (value < 0 || value === setting.start || value < setting.start) {
            setError(ERROR_MESSAGES.INCORRECT)
        } else if (value === localValue?.max) {
            setError('')
        } else {
            setError(ERROR_MESSAGES.ENTER_VALUES)
        }
        setSetting({...setting, max: value})
        setCounter(setting.start)
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (value < 0 || value === setting.max || value > setting.max) {
            setError(ERROR_MESSAGES.INCORRECT)
        } else if (value === localValue?.start) {
            setError('')
        } else {
            setError(ERROR_MESSAGES.ENTER_VALUES)
        }
        setSetting({...setting, start: value})
        setCounter(value)
    }

    const getInputClassName = () => {
        return !isValid ? s.error : ''
    }

    return (
        <div className={s.setting}>
            <div className={s.wrapper}>
                <span>max value:</span>
                <input value={setting.max}
                       className={getInputClassName()}
                       onChange={onChangeMaxHandler}
                       type="number"
                />
            </div>
            <div className={s.wrapper}>
                <span>start value:</span>
                <input value={setting.start}
                       className={getInputClassName()}
                       onChange={onChangeStartHandler}
                       type="number"
                />
            </div>
        </div>
    )
}