import s from './ButtonsContainer.module.css'
import {Button} from "../Button/Button.tsx";

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
        setCounter(0)
    }
    return (
        <div className={s.buttonsContainer}>
            <Button name='inc' disabled={counter > 4} onClick={onClickButtonInc}/>
            <Button name='reset' disabled={counter === 0} onClick={onClickButtonReset}/>
        </div>
    )
}