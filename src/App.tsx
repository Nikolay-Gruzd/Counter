import s from './App.module.css'
import {useState} from "react";
import {Counter} from "./components/Counter/Counter.tsx";
import {ButtonsContainer} from "./components/ButtonsContainer/ButtonsContainer.tsx";

function App() {
    let [counter, setCounter] = useState<number>(0)

    return (
        <div className={s.app}>
            <div className={s.container}>
                <Counter counter={counter}/>
                <ButtonsContainer counter={counter} setCounter={setCounter}/>
            </div>
        </div>
    )
}

export default App
