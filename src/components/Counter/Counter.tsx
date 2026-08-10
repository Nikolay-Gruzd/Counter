import s from './Counter.module.css'
import {MAX_VALUE, MIN_VALUE, SettingType} from "../../App.tsx";

type CounterType = {
    counter: number,
    setting: SettingType,
    error: string
}
export const Counter = ({counter, setting, error}: CounterType) => {

    const styleError = (setting.start < 0)
        ? s.error
        : (setting.max < 0)
            ? s.error
            : (setting.start > setting.max)
                ? s.error
                : ''

    return (
        <div className={`
            ${s.counterContainer}
            ${counter === setting.max ? s.limitCounter : null}
        `}>
            {setting.start === MIN_VALUE && setting.max === MAX_VALUE
                ? counter
                : <span className={styleError}>{error}</span>}
        </div>
    );
};