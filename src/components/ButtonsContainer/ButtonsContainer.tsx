import s from './ButtonsContainer.module.css'
import {Button} from "../Button/Button.tsx";
import {SettingType} from "../Setting/Setting.tsx";
import {setErrorAC} from "../../model/error-reducer.ts";
import {AppDispatch} from "../../app/store.ts";
import {counterIncrementAC} from "../../model/counter-reducer.ts";
import {changeSettingAC} from "../../model/setting-reducer.ts";

type ButtonsContainerType = {
    counter?: number,
    dispatch?: AppDispatch,
    modeSetting?: boolean,
    setting: SettingType,
    localValue?: SettingType,
    setLocalValue?: (value: SettingType) => void,
    error?: string,
}

export const ButtonsContainer = ({
                                     counter,
                                     modeSetting,
                                     setting,
                                     setLocalValue,
                                     localValue,
                                     error,
                                     dispatch
                                 }: ButtonsContainerType) => {

    debugger
    const getFromLocalHandler = () => {
        debugger
        // setError?.('')
        dispatch?.(changeSettingAC({max: setting.max, start: setting.start}))
        dispatch?.(setErrorAC({error: ''}))
        setLocalValue?.({max: setting.max, start: setting.start})
    }
    const onClickButtonInc = () => {
        debugger
        if (counter !== undefined) {
            setLocalValue?.({...setting, start: counter + 1})
            dispatch?.(counterIncrementAC({value: counter + 1})) //setCounter?.(counter + 1)
        }
    }
    const onClickButtonReset = () => {
        // setCounter?.(setting.start)
        dispatch?.(counterIncrementAC({value: setting.start}))
    }

    const incDisabledValue = counter === undefined
        || counter === setting.max
        || setting.start === setting.max
        || !!error

    const resetDisabledValue =
        counter === setting.start
        || !!error

    if (modeSetting) {
        const disabledButton =
            setting.start === localValue?.start
            && setting.max === localValue?.max
            || setting.start < 0
            || setting.max < 0
            || setting.start > setting.max
            || setting.start === setting.max
        return (
            <div className={s.buttonsContainer}>
                <Button name='set' disabled={disabledButton} onClick={getFromLocalHandler}/>
            </div>
        )
    }

    return (
        <div className={s.buttonsContainer}>
            <Button name='inc' disabled={incDisabledValue} onClick={onClickButtonInc}/>
            <Button name='reset' disabled={resetDisabledValue}
                    onClick={onClickButtonReset}/>
        </div>

    )

}