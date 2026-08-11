import s from './App.module.css'
import {useEffect, useState} from "react";
import {Counter} from "./components/Counter/Counter.tsx";
import {ButtonsContainer} from "./components/ButtonsContainer/ButtonsContainer.tsx";
import {Setting} from "./components/Setting/Setting.tsx";

// export const MAX_VALUE = 5
// export const MIN_VALUE = 0

export type SettingType = {
    max: number,
    start: number
}

function App() {
    const [localValue, setLocalValue] = useState<SettingType>({max: 5, start: 0})

    const [setting, setSetting] = useState<SettingType>({max: localValue.max, start: localValue.start})
    const [counter, setCounter] = useState<number>(localValue.start)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        let valueAssString = localStorage.getItem('counterValue')
        if (valueAssString) {
            let newValue = JSON.parse(valueAssString)
            setLocalValue(newValue)
            setSetting(newValue)
            setCounter(newValue.start)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(localValue))
    }, [localValue])

    return (
        <div className={s.app}>
            <div className={s.container}>
                <Setting setting={setting} localValue={localValue} setSetting={setSetting} setCounter={setCounter}
                         setError={setError}/>
                <ButtonsContainer modeSetting={true} setting={setting} localValue={localValue} setError={setError}
                                  setLocalValue={setLocalValue}/>
            </div>
            <div className={s.container}>
                <Counter counter={counter} setting={setting} error={error} localValue={localValue}/>
                <ButtonsContainer counter={counter} error={error} setCounter={setCounter} setting={setting}/>
            </div>
        </div>
    )
}

export default App
