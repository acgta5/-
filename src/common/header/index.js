import React,{ PureComponent} from 'react';
import {Link} from 'react-router-dom';
import { 
    HeaderWrapper,
    Logo,Button,
    Nav,NavItem,Vip,
    Search,NavSearch,SearchInfo,SearchSwitch,SearchTitle,SearchItemList,SearchInfoItem,
    } from './style'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from './../../pages/login/store'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

class Header extends PureComponent{
    constructor(){
        super();
        this.getSearchInfo = this.getSearchInfo.bind(this);
    }
    getSearchInfo(){
        let {focused,mouseIn,list,page,totalPage,mouseEnter,mouseLeave,changePage} = this.props;
        let newList = list.toJS();
        let datas=[];
        if(newList.length){
            for(let i= (page-1)*10 ;i<(page===totalPage?newList.length:page*10);i++){
                datas.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseLeave}
                >
                    <SearchTitle>
                        热门搜索
                    </SearchTitle>
                    <SearchSwitch
                        onClick={e=>changePage(page,totalPage,this.spinIcon)}
                    >
                        <span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe6a7;</span>换一批
                    </SearchSwitch>
                    <SearchItemList>
                        {datas}
                    </SearchItemList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        let {focused,inputFocus,inputBlur,list,login,logout} = this.props;
        let {getSearchInfo} = this;
        return (
            <HeaderWrapper className="header">
                <Link to="/"><Logo /></Link>
                <Link to="/write">
                    <Button className="write">
                        <span className="iconfont">&#xe652;</span>
                        写文章
                    </Button>
                </Link>
                <Button className="reg">注册</Button>
                <Nav>
                    <Link to="/"><NavItem className="left active">首页</NavItem></Link>
                    <NavItem className="left">下载App</NavItem>
                    <Search>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? "focused" : ""}
                                onFocus={e=>inputFocus(list)}
                                onBlur={inputBlur}
                            />
                        </CSSTransition>
                        <span  className={focused ? "iconfont focused zoom" : "iconfont zoom"}>&#xe637;</span>
                        {getSearchInfo()}
                    </Search>
                    {
                        login ?
                        <NavItem className="right login" onClick={logout}>注销</NavItem> :
                        <Link to="/login"><NavItem className="right login">登录</NavItem></Link>
                    }
                    <Vip className="right"/>
                    <NavItem className="right fonts">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                </Nav>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        focused : state.getIn(['header','focused']),
        list : state.getIn(['header','list']),
        page : state.getIn(['header','page']),
        totalPage : state.getIn(['header','totalPage']),
        mouseIn : state.getIn(['header','mouseIn']),
        login : state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        inputFocus(list){
            if(list.size===0)dispatch(actionCreators.getList());
            dispatch(actionCreators.handleSearchFocus());
        },
        inputBlur(){
            dispatch(actionCreators.handleSearchBlur());
        },
        mouseEnter(){
            dispatch(actionCreators.handleMouseEnter());
        },
        mouseLeave(){
            dispatch(actionCreators.handleMouseLeave());
        },
        logout(){
            dispatch(loginActionCreators.logout());
        },
        changePage(page,totalPage,icon){
            let angle = icon.style.transform.replace(/[^0-9]/ig,"");
            if(angle){
                angle = parseInt(angle,10);
            }else{
                angle = 0;
            }
            icon.style.transform = "rotate("+(angle+360)+"deg)";
            if(page<totalPage){
                dispatch(actionCreators.handleChangePage(page+1));
            }else{
                dispatch(actionCreators.handleChangePage(1));
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)