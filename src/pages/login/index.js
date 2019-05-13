import React from 'react'
import { connect } from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import { LoginWrapper , LoginBox , Input , Button} from './style'
import {actionCreators} from './store'
class Login extends React.PureComponent{
    render(){
        let {loginStatus} = this.props;
        if(loginStatus){
            return <Redirect to="/"/>
        }else{
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Link to="/"><img src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/></Link>
                        <Input placeholder="用户名" innerRef={input=>{this.username=input}}/>
                        <Input placeholder="密码" type="password" innerRef={input=>{this.password=input}}/>
                        <Button onClick={()=>this.props.login(this.username,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}
const mapStateToProps = (state)=>({
    loginStatus:state.getIn(['login','login'])
});
const mapDispatchToProps = (dispatch) =>({
    login(username,password){
        dispatch(actionCreators.login(username.value,password.value));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)