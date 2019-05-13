import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {WriteWrapper , WriteBox, WriteTitle ,WriteContent} from './style'
class Write extends React.PureComponent{
    render(){
        let {loginStatus} = this.props;
        if(!loginStatus){
            return <Redirect to="/login"/>
        }else{
            return (
                <WriteWrapper>
                    <WriteBox>
                        <WriteTitle placeholder="输入标题"/>
                        <WriteContent placeholder="输入内容"/>
                    </WriteBox>
                </WriteWrapper>
            )
        }
        
    }
}
const mapStateToProps = (state)=>({
    loginStatus:state.getIn(['login','login'])
});
export default connect(mapStateToProps,null)(Write);