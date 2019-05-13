
import React from 'react';
import { connect } from 'react-redux'
import {DetailWrapper,Content,Header,Ads} from './style'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'
class Detail extends React.PureComponent{
    render(){
        let {title , content} = this.props; 
        return (
            <DetailWrapper>
                <Content>
                    <Header>{title}</Header>
                    <div dangerouslySetInnerHTML={{__html:content}}/>
                </Content>
                <Ads>广告</Ads>
            </DetailWrapper>
        )
    };
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapStateToProps = (state) =>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});
const mapDispatchToProps = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));