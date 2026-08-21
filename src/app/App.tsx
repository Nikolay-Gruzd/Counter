import s from './App.module.css'
import {Counter} from "../components/Counter/Counter.tsx";
import {ButtonsContainer} from "../components/ButtonsContainer/ButtonsContainer.tsx";
import {Setting} from "../components/Setting/Setting.tsx";
import {useLocalStorage} from "../common/hooks/useLocalStorage.ts";
import {DEFAULT_SETTINGS, STORAGE_KEY} from "../constants";
import {useCounter} from "../common/hooks/useCounter.ts";

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
