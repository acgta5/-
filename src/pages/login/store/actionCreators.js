import * as constants from './constants'
import axios from 'axios'

const changeLogin = (value) =>({
    type:constants.CHANGE_LOGIN,
    value
})
export const logout = () => ({
    type : constants.LOG_OUT
})
export const login = (username,password)=>{
    return (dispatch)=>{
        axios.get("/api/login.json?username="+username+"&password="+password).then(res=>{
            const result = res.data.data;
            console.log(result.username,result.password);
            if(result.username===username && result.password===password){
                dispatch(changeLogin(true));
            }else{
                alert("用户名或密码错误")
            }
        })
    }
}