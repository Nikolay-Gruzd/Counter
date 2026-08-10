import s from './Setting.module.css'
import {SettingType} from "../../App.tsx";
import {ChangeEvent} from "react";

interface SettingProps {
    setting: SettingType,
    setSetting: (value: SettingType) => void
    setCounter: (value: number) => void
    setError: (value: string) => void
}

export const Setting = ({setting, setSetting, setCounter, setError}: SettingProps) => {

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (value < 0 || value === setting.start || value < setting.start) {
            setError('incorrect value!')
        } else {
            setError(`Enter values and press 'set'`)
        }
        setSetting({...setting, max: value})
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (value < 0 || value === setting.max || value > setting.max) {
            setError('incorrect value!')
        } else {
            setError(`Enter values and press 'set'`)
        }
        setSetting({...setting, start: value})
        setCounter(value)
    }

    const isErrorToInputMaxValue =
        setting.start === setting.max
            ? s.error
            : setting.max < 0
                ? s.error
                : ''

    const isErrorToInputStartValue =
        setting.start === setting.max
            ? s.error
            : setting.start < 0
                ? s.error
                : setting.start > setting.max ? s.error : ''

    return (
        <div className={s.setting}>
            <div className={s.wrapper}>
                <span>max value:</span>
                <input value={setting.max} className={isErrorToInputMaxValue} onChange={onChangeMaxHandler}
                       type="number"/>
            </div>
            <div className={s.wrapper}>
                <span>start value:</span>
                <input value={setting.start} className={isErrorToInputStartValue} onChange={onChangeStartHandler}
                       type="number"/>
            </div>
        </div>
    )
}