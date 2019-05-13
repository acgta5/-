import {Search_Focus,Search_Blur,Search_List,Mouse_Enter,Mouse_Leave, Change_Page} from './actionTypes'
import { fromJS } from 'immutable'
const defaultValue = fromJS({
    focused : false,
    mouseIn : false,
    list : [],
    page: 1,
    totalPage :1
});
export default (state=defaultValue,action)=>{
    switch(action.type){
        case Search_Focus:
        return state.set("focused",true);
        case Search_Blur:
        return state.set("focused",false);
        case Search_List:
        return state.merge({
            list : action.data,
            totalPage : action.totalPage
        });
        case Mouse_Enter:
        return state.set("mouseIn",true);
        case Mouse_Leave:
        return state.set("mouseIn",false);
        case Change_Page:
        return state.set("page",action.page);
        default :
        return state;
    }
}