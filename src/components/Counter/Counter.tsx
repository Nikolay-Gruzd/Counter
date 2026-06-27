import s from './Counter.module.css'
import {MAX_VALUE} from "../../App.tsx";

type CounterType = {
    counter: number
}
export const Counter = ({counter}: CounterType) => {
    return (
        <div className={`
            ${s.counterContainer}
            ${counter === MAX_VALUE ? s.limitCounter : null}
        `}>
            {counter}
        </div>
    );
};