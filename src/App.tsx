import s from './App.module.css'
import {useState} from "react";
import {Counter} from "./components/Counter/Counter.tsx";
import {ButtonsContainer} from "./components/ButtonsContainer/ButtonsContainer.tsx";
import {Setting} from "./components/Setting/Setting.tsx";

export const MAX_VALUE = 5
export const MIN_VALUE = 1

export type SettingType = {
    max: number,
    start: number
}

function App() {
    const [setting, setSetting] = useState<SettingType>({max: MAX_VALUE, start: MIN_VALUE})
    const [counter, setCounter] = useState<number>(setting.start)
    const [error, setError] = useState<string>('')

    return (
        <div className={s.app}>
            <div className={s.container}>
                <Setting setting={setting} setSetting={setSetting} setCounter={setCounter} setError={setError} />
                <ButtonsContainer modeSetting={true} setting={setting}/>
            </div>
            <div className={s.container}>
                <Counter counter={counter} setting={setting} error={error}/>
                <ButtonsContainer counter={counter} setCounter={setCounter} setting={setting}/>
            </div>
        </div>
    )
}

export default App
