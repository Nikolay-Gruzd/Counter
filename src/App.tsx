import s from './App.module.css'
import {useState} from "react";
import {Counter} from "./components/Counter/Counter.tsx";
import {ButtonsContainer} from "./components/ButtonsContainer/ButtonsContainer.tsx";

export const MAX_VALUE = 12
export const MIN_VALUE = 3

function App() {
    const [counter, setCounter] = useState<number>(MIN_VALUE)
    return (
        <div className={s.app}>
            <div className={s.container}>

            </div>
            <div className={s.container}>
                <Counter counter={counter}/>
                <ButtonsContainer counter={counter} setCounter={setCounter}/>
            </div>
        </div>
    )
}

export default App
