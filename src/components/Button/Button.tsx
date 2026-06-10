import s from './Button.module.css'

type ButtonType = {
    name: string,
    disabled: boolean,
    onClick: () => void,
}

export const Button = ({name, disabled, onClick}: ButtonType) => {
    return (
        <button className={s.button} disabled={disabled} onClick={onClick}>
            {name}
        </button>
    );
};