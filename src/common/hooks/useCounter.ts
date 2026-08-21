// // import {useState} from "react";
// import {isSettingValid} from "../../utils/helpers.ts";
// import {ERROR_MESSAGES} from "../../constants";
// import {SettingType} from "../../components/Setting/Setting.tsx";
// import {useAppSelector} from "./useAppSelector.ts";
// import {useAppDispatch} from "./useAppDispatch.ts";
// import {selectCounter} from "../../model/counter-selectors.ts";
// import {selectError} from "../../model/error-selectors.ts";
// import {selectSetting} from "../../model/setting-selectors.ts";
// import {setErrorAC} from "../../model/error-reducer.ts";
// import {counterIncrementAC} from "../../model/counter-reducer.ts";
// import {changeSettingAC} from "../../model/setting-reducer.ts";

// export const useCounter = () => {
//     // Все состояния в одном месте
//     // const [counter, setCounter] = useState<number>(initialValue.start)
//     // const [error, setError] = useState<string>('')
//     // const [setting, setSetting] = useState<SettingType>(initialValue)
//
//     const counter = useAppSelector(selectCounter)
//     const error = useAppSelector(selectError)
//     const setting = useAppSelector(selectSetting)
//
//     const dispatch = useAppDispatch()
//
//     // Логика инкремента
//     const increment = () => {
//         if(!isSettingValid(setting)) {
//             // setError(ERROR_MESSAGES.INCORRECT)
//             dispatch(setErrorAC({error: ERROR_MESSAGES.INCORRECT}))
//             return
//         }
//         if (counter < setting.max) {
//             // setCounter(counter => counter + 1)
//             // setError('')
//             dispatch(counterIncrementAC({value: counter + 1}))
//             dispatch(setErrorAC({error: ''}))
//         }
//     }
//
//     // Логика ресета
//     const reset = () => {
//         if(!isSettingValid(setting)) {
//             // setError(ERROR_MESSAGES.INCORRECT)
//             dispatch(setErrorAC({error: ERROR_MESSAGES.INCORRECT}))
//             return
//         }
//         // setCounter(setting.start)
//         // setError('')
//         dispatch(counterIncrementAC({value: setting.start}))
//     }
//
//     // Обновление настроек
//     const updateSetting = (newSetting: SettingType) => {
//         // setSetting(newSetting)
//         // setCounter(newSetting.start)
//         dispatch(changeSettingAC({start: newSetting.start, max: newSetting.max}))
//         dispatch(counterIncrementAC({value: newSetting.start}))
//
//     }
//
//     // Возвращаем только то, что нужно снаружи
//     return {
//         counter, error, setting, dispatch, increment, reset, updateSetting,
//     }
// }