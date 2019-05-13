import * as constants from './constants'
import axios  from 'axios'
const  detail = (title,content) =>({
    type :constants.GET_DETAIL,
    title,
    content
})
export const getDetail = (id) => {
    return dispatch=>{
        axios.get("/api/detail.json?id="+id).then(res=>{
            const result = res.data.data;
            dispatch(detail(result.title,result.content));
        })
    }
}