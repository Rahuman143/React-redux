import {ActionType} from '../Action-Types/index'
interface DepsiteAction {
    type : ActionType.DEPOSITE,
    payload : number
}

interface WithdrawAction {
    type : ActionType.WITHDRAW,
    payload : number
}

interface BankruptAction {
    type : ActionType.BANKRUPT
}

export type Action = DepsiteAction | WithdrawAction | BankruptAction
