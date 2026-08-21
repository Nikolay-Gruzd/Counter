import s from './App.module.css'
import {Counter} from "../components/Counter/Counter.tsx";
import {ButtonsContainer} from "../components/ButtonsContainer/ButtonsContainer.tsx";
import {Setting} from "../components/Setting/Setting.tsx";
// import {useLocalStorage} from "../common/hooks/useLocalStorage.ts";
import {useState} from "react";
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {useAppDispatch} from "../common/hooks/useAppDispatch.ts";
import {selectCounter} from "../model/counter-selectors.ts";
import {selectError} from "../model/error-selectors.ts";
import {selectSetting} from "../model/setting-selectors.ts";

function App() {

    // const { localValue, setLocalValue } = useLocalStorage(STORAGE_KEY, DEFAULT_SETTINGS)
    const [ localValue, setLocalValue ] = useState({start: 0, max: 5})

    // const {
    //     counter,
    //     error,
    //     setting,
    //     dispatch,
    // } = useCounter()

    // const [counter, setCounter] = useState<number>(initialValue.start)
    // const [error, setError] = useState<string>('')
    // const [setting, setSetting] = useState<SettingType>(initialValue)

    const counter = useAppSelector(selectCounter)
    const error = useAppSelector(selectError)
    const setting = useAppSelector(selectSetting)

    const dispatch = useAppDispatch()

    return (
        <div className={s.app}>
            <div className={s.container}>
                <Setting
                    setting={setting}
                    dispatch={dispatch}
                    localValue={localValue}
                />
                <ButtonsContainer
                    modeSetting={true}
                    setting={setting}
                    localValue={localValue}
                    setLocalValue={setLocalValue}
                    dispatch={dispatch}
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
                    dispatch={dispatch}
                    setting={setting}
                    error={error}
                />
            </div>
        </div>
    )
}

export default App
