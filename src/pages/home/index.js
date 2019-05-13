import React from 'react';
import { connect } from 'react-redux' 
import $ from 'jquery'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Banner from './components/Banner'
import List from './components/List'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Author from './components/Author'
import {actionCreators} from './store'
import {ScrollTop} from './style'
class Home extends React.PureComponent{
    
    render(){
        return (
            <HomeWrapper className="content">
                <HomeLeft>
                    <Banner/>
                    <Topic />
                    <List/>
                </HomeLeft>
                <HomeRight className="contentRight">
                    <Recommend/>
                    <Author/>
                </HomeRight>
                {this.props.showScroll ? <ScrollTop onClick={this.toTop}>回到顶部</ScrollTop>:null}
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    };
    componentWillUnmount(){
        $(window).unbind("scroll");
    }
    bindEvents(){
        // window.addEventListener("scroll",this.props.changeScrollTop);
        $(window).bind("scroll",
            this.props.changeScrollTop
        )
    }
    toTop(){
        window.scrollTo(0,0);
    }
}
const mapStateToProps = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.changeHomeData());
    },
    changeScrollTop(){
        if($(window).scrollTop() > 400){
            dispatch(actionCreators.scrollTop(true))
        }else{
            dispatch(actionCreators.scrollTop(false));
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);