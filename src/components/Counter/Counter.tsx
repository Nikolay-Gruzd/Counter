import s from './Counter.module.css'

type CounterType = {
    counter: number
}
export const Counter = ({counter}: CounterType) => {
    return (
        <div className={`
            ${s.counterContainer}
            ${counter === 5 ? s.limitCounter : null}
        `}>
            {counter}
        </div>
    );
};