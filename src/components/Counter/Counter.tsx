import s from './Counter.module.css'
import {SettingType} from "../Setting/Setting.tsx";

type CounterType = {
    counter: number,
    setting: SettingType,
    error: string,
    localValue?: SettingType
}
export const Counter = ({counter, setting, error, localValue}: CounterType) => {
debugger
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
            ${counter === setting.max ? s.limitCounter : ''}
        `}>
            {setting.start === localValue?.start && setting.max === localValue.max
                ? counter
                : <span className={styleError}>{error}</span>}
        </div>
    );
};