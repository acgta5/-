import {fromJS} from 'immutable'
import * as constants from './constants'
const defaultValue = fromJS({
    login :false
});
const reducer = (state = defaultValue,action={}) =>{
    switch(action.type){
        case constants.CHANGE_LOGIN:
        return state.set("login",action.value);
        case constants.LOG_OUT:
        return state.set("login",false);
        default:
        return state;
    }
}
export default reducer;