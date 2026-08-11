import s from './ButtonsContainer.module.css'
import {Button} from "../Button/Button.tsx";
import {SettingType} from "../../App.tsx";

type ButtonsContainerType = {
    counter?: number,
    setCounter?: (value: number) => void,
    modeSetting?: boolean,
    setting: SettingType,
    localValue?: SettingType,
    setLocalValue?: (value: SettingType) => void,
    error?: string,
    setError?: (error: string) => void,
}

export const ButtonsContainer = ({
                                     counter,
                                     setCounter,
                                     modeSetting,
                                     setting,
                                     setLocalValue,
                                     localValue,
                                     error,
                                     setError
                                 }: ButtonsContainerType) => {

    const getFromLocalHandler = () => {
        setLocalValue?.({max: setting.max, start: setting.start})
        setError?.('')
    }
    const onClickButtonInc = () => {
        counter !== undefined && setCounter?.(counter + 1)
    }
    const onClickButtonReset = () => {
        setCounter?.(setting.start)
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