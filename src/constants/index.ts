export const STORAGE_KEY = 'counterValue'

export const DEFAULT_SETTINGS = {
    max: 5,
    start: 0
} as const

export const ERROR_MESSAGES = {
    INCORRECT: 'Incorrect value',
    ENTER_VALUES: 'Enter value and press "set"',
} as const // as const - делает объект readonly