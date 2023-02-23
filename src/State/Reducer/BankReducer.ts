import {Action} from './Actions/index'
import { ActionType } from './Action-Types';
const initialState = 0;
// type Action = {
// type : string;
// payload?:number;
// }


const Reducer =(state:number=initialState,action:Action) => {
    switch(action.type){
        case ActionType.DEPOSITE:
            return state+action.payload;
            case ActionType.WITHDRAW:
                return state-action.payload;
                case ActionType.BANKRUPT:
                    return 0;
                    default:
                        return state
    }

}
export default Reducer