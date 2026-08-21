import s from './Setting.module.css'
import {useValidation} from "../../common/hooks/useValidation.ts";
import {ChangeEvent} from "react";
import {ERROR_MESSAGES} from "../../constants";
import {setErrorAC} from "../../model/error-reducer.ts";
import {AppDispatch} from "../../app/store.ts";
import {changeSettingAC} from "../../model/setting-reducer.ts";
import {counterIncrementAC} from "../../model/counter-reducer.ts";

export type SettingType = {
    max: number,
    start: number
}
type SettingProps = {
    setting: SettingType,
    dispatch: AppDispatch,
    localValue?: SettingType
}

export const Setting = ({setting, dispatch, localValue}: SettingProps) => {

    const {isValid} = useValidation(setting)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (value < 0 || value === setting.start || value < setting.start) {
            // setError(ERROR_MESSAGES.INCORRECT)
            dispatch(setErrorAC({error: ERROR_MESSAGES.INCORRECT}))
        } else if (value === localValue?.max) {
            // setError('')
            dispatch(setErrorAC({error: ''}))
        } else {
            // setError(ERROR_MESSAGES.ENTER_VALUES)
            dispatch(setErrorAC({error: ERROR_MESSAGES.ENTER_VALUES}))
        }
        // setSetting({...setting, max: value})
        // setCounter(setting.start)
        dispatch(changeSettingAC({...setting, max: value}))
        dispatch(counterIncrementAC({value: setting.start}))
    }
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        if (value < 0 || value === setting.max || value > setting.max) {
            // setError(ERROR_MESSAGES.INCORRECT)
            dispatch(setErrorAC({error: ERROR_MESSAGES.INCORRECT}))
        } else if (value === localValue?.start) {
            // setError('')
            dispatch(setErrorAC({error: ''}))
        } else {
            // setError(ERROR_MESSAGES.ENTER_VALUES)
            dispatch(setErrorAC({error: ERROR_MESSAGES.ENTER_VALUES}))
        }
        // setSetting({...setting, start: value})
        // setCounter(value)
        dispatch(changeSettingAC({...setting, start: value}))
        dispatch(counterIncrementAC({value: value}))
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