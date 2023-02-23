import { ActionType } from "../Action-Types";
import { Dispatch } from "redux";
import { Action } from "../Actions/index";

export const depositeMoney = (amount:number) =>{
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSITE,
            payload : amount
        })
    }

}
export const withdrawMoney = (amount:number) =>{
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload : amount
        })
    }

}

export const bankruptMoney= () =>{
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
            })
    }

}