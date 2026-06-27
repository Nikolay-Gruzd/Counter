import s from './ButtonsContainer.module.css'
import {Button} from "../Button/Button.tsx";
import {MAX_VALUE, MIN_VALUE} from "../../App.tsx";

type ButtonsContainerType = {
    counter: number
    setCounter: (value: number) => void
}

export const ButtonsContainer = ({counter, setCounter}: ButtonsContainerType) => {

    const onClickButtonInc = () => {
        let inc = counter + 1
        setCounter(inc)
    }
    const onClickButtonReset = () => {
        setCounter(MIN_VALUE)
    }
    return (
        <div className={s.buttonsContainer}>
            <Button name='inc' disabled={counter >= MAX_VALUE} onClick={onClickButtonInc}/>
            <Button name='reset' disabled={counter === MIN_VALUE} onClick={onClickButtonReset}/>
        </div>
    )
}