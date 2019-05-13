import {Search_Focus,Search_Blur,Search_List,Mouse_Enter,Mouse_Leave, Change_Page} from './actionTypes'
import axios from 'axios';
import { fromJS } from 'immutable';
export const handleSearchFocus = ()=>({
    type : Search_Focus
});
export const handleSearchBlur = ()=>({
    type : Search_Blur
});
export const handleList = (data)=>({
    type : Search_List,
    data : fromJS(data),
    totalPage : Math.ceil(data.length/10)
});
export const handleMouseEnter = ()=>({
    type : Mouse_Enter
});
export const handleMouseLeave = ()=>({
    type : Mouse_Leave
});
export const handleChangePage = (page)=>({
    type : Change_Page,
    page
})
export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/list.json').then(res=>{
            const data = res.data;
            dispatch(handleList(data.data));
        }).catch(e=>{
            console.log(e.message);
        })
    }
}