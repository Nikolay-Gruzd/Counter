import s from './ButtonsContainer.module.css'
import {Button} from "../Button/Button.tsx";
import {MAX_VALUE, MIN_VALUE, SettingType} from "../../App.tsx";

type ButtonsContainerType = {
    counter?: number
    setCounter?: (value: number) => void
    modeSetting?: boolean
    setting: SettingType
}

export const ButtonsContainer = ({counter, setCounter, modeSetting, setting}: ButtonsContainerType) => {
    if (modeSetting) {
        const disabledButton =
            setting.start === MIN_VALUE
            && setting.max === MAX_VALUE
            || setting.start < 0
            || setting.max < 0
            || setting.start > setting.max
            || setting.start === setting.max
        return (
            <div className={s.buttonsContainer}>
                <Button name='set' disabled={disabledButton} onClick={() => {}}/>
            </div>
        )
    }

    const onClickButtonInc = () => {
        counter !== undefined && setCounter?.(counter + 1)
    }
    const onClickButtonReset = () => {
        setCounter?.(setting.start)
    }

    const incDisabledValue = counter === undefined
        || counter === setting.max || setting.start !== MIN_VALUE || setting.max !== MAX_VALUE

    const resetDisabledValue = counter === undefined
        || counter === setting.start || setting.start !== MIN_VALUE || setting.max !== MAX_VALUE

    return (
        <div className={s.buttonsContainer}>
            <Button name='inc' disabled={incDisabledValue} onClick={onClickButtonInc}/>
            <Button name='reset' disabled={resetDisabledValue}
                    onClick={onClickButtonReset}/>
        </div>

    )

}