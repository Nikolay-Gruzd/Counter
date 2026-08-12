import s from './App.module.css'
import {Counter} from "./components/Counter/Counter.tsx";
import {ButtonsContainer} from "./components/ButtonsContainer/ButtonsContainer.tsx";
import {Setting} from "./components/Setting/Setting.tsx";
import {useLocalStorage} from "./hooks/useLocalStorage.ts";
import {DEFAULT_SETTINGS, STORAGE_KEY} from "./constants";
import {useCounter} from "./hooks/useCounter.ts";

export type SettingType = {
    max: number,
    start: number
}

function App() {

    const { localValue, setLocalValue } = useLocalStorage(STORAGE_KEY, DEFAULT_SETTINGS)

    const {
        counter,
        setCounter,
        error,
        setError,
        setting,
        setSetting
    } = useCounter(localValue)

    // const [localValue, setLocalValue] = useState<SettingType>({max: 5, start: 0})
    //
    // const [setting, setSetting] = useState<SettingType>({max: localValue.max, start: localValue.start})
    // const [counter, setCounter] = useState<number>(localValue.start)
    // const [error, setError] = useState<string>('')
    //
    // useEffect(() => {
    //     let valueAssString = localStorage.getItem('counterValue')
    //     if (valueAssString) {
    //         let newValue = JSON.parse(valueAssString)
    //         setLocalValue(newValue)
    //         setSetting(newValue)
    //         setCounter(newValue.start)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(localValue))
    // }, [localValue])

    return (
        <div className={s.app}>
            <div className={s.container}>
                <Setting
                    setting={setting}
                    setSetting={setSetting}
                    setCounter={setCounter}
                    setError={setError}
                    localValue={localValue}
                />
                <ButtonsContainer
                    modeSetting={true}
                    setting={setting}
                    localValue={localValue}
                    setLocalValue={setLocalValue}
                    setError={setError}
                />
            </div>
            <div className={s.container}>
                <Counter
                    counter={counter}
                    setting={setting}
                    error={error}
                    localValue={localValue}
                />
                <ButtonsContainer
                    counter={counter}
                    setCounter={setCounter}
                    setting={setting}
                    error={error}
                    setError={setError}
                />
            </div>
        </div>
    )
}

export default App
