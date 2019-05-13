import axios from 'axios'
import * as constants from './constants'
export const handleHomeData = (result)=>({
    type: constants.Change_Home_Data,
    topics:result.topics,
    lists:result.lists,
    recommends:result.recommends,
    authors:result.authors,
    authorsTotalPage:Math.ceil(result.authors.length/6)
})
export const changeHomeData = ()=>{
    return (dispatch)=>{
        axios.get('./api/home.json').then(res=>{
            const result = res.data;
            const action = handleHomeData(result)
            dispatch(action);
        })
    }
}
export const changeAuthorsPage = (page)=>({
    type:constants.Change_Author_Page,
    page
});
export const addHomeList = (data,listsPage) =>({
    type:constants.Add_Home_List,
    data,
    listsPage
}) 
export const getMoreList = (listsPage) =>{
    return (dispatch)=>{
        axios.get('./api/homeList.json?page='+listsPage).then(res=>{
            const result = res.data.data;
            dispatch(addHomeList(result,listsPage+1));
        })
    }
}
export const scrollTop = (show) =>({
    type:constants.Scroll_Top,
    show
})