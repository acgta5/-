import {fromJS} from 'immutable'
import * as constants from './constants'
const defaultState=fromJS({
    topics:[],
    lists:[],
    recommends:[],
    authors:[],
    authorsTotalPage:1,
    authorsPage:1,
    listsPage:1,
    showScroll:false
})

const changeHomeData = (state,action)=>{
    return state.merge({
                topics:fromJS(action.topics),
                lists:fromJS(action.lists),
                recommends:fromJS(action.recommends),
                authors:fromJS(action.authors),
                authorsTotalPage:action.authorsTotalPage
            });
}
const addHomeList = (state,action) =>{
    return (
        state.merge({
            "lists": state.get("lists").concat(fromJS(action.data)),
            "listsPage" : action.listsPage
        })
    )
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.Change_Home_Data:
        return changeHomeData(state,action);
        case constants.Change_Author_Page:
        return state.set("authorsPage",action.page);
        case constants.Add_Home_List:
        return addHomeList(state,action);
        case constants.Scroll_Top:
        return state.set("showScroll",action.show);
        default:
        return state;
    }
}