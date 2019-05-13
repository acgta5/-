import styled from 'styled-components'
import logo from './../../static/logo.png';
import vip from './../../static/vip.png';

//header容器样式
export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
//header logo样式
export const Logo = styled.div`
    width:100px;
    cursor:pointer;
    height:56px;
    background:url(${logo});
    background-size:contain;
    position:absolute;
    top:0px;
    left:0px;
`;

export const Nav = styled.div`
    max-width:960px;
    height:100%;
    padding-right:50px;
    box-sizing:border-box;
    margin : 0 auto;
`;
//Nav内容样式
export const NavItem = styled.div`
    color:#333333;
    display:block;
    line-height:56px;
    padding : 0px 15px;
    cursor:pointer;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &.active{
        color:#ea6f5a;
    }
    &.login{
        color:#969696;
        padding:0px 10px;
    }
    &.fonts{
        color:#969696;
        padding:0 10px;
        .iconfont{
            font-size:24px;
        }
        
    }
`;
//vip样式
export const Vip = styled.a`
    display:block;
    cursor:pointer;
    float:right;
    margin:0 15px;
    width:56px;
    height:56px;
    background:url(${vip}) center center no-repeat;
    background-size:56px 25px;
    
    img{
        vertical-align:middle;
    }
`;
//搜索栏样式
export const Search = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        transition:all .2s ease-out;
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit{
        transition:all .2s ease-in;
    }
    .slide-exit-active{
        width:160px;
    }
    .zoom{
        position:absolute;
        right:0px;
        bottom:4px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:20px;
        &.focused{
            background:#999999;
        }
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    margin-left:20px;
    height:38px;
    margin-top:9px;
    border-radius:40px;
    box-sizing:border-box;
    border:none;
    padding:0 30px 0 20px;
    outline:none;
    background:#eeeeee;
    font-szie:14px;
    color:#666666;
    &::placeholder{
        color:#999999;
    }
    &.focused{
        width:240px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    left:0px;
    top:56px;
    z-index:1;
    width:240px;
    background:#ffffff;
    padding:20px 20px 10px;
    border-radius:10px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
`;
export const SearchTitle = styled.span`
    font-size:14px;
    color:#969696;
`;
export const SearchSwitch = styled.span`
    float:right;
    cursor:pointer;
    font-size:13px;
    color:#969696;
    .spin{
        display:block;
        float:left;
        font-size:14px;
        margin-right:5px;
        transition:all .3s ease-in;
        transform-origin : center center;
    }
`;
export const SearchItemList = styled.div`
    overflow:hidden;
`;
export const SearchInfoItem = styled.a`
    display:inline-block;
    cursor:pointer;
    margin:10px 10px 0 0;
    font-size:12px;
    padding:2px 6px;
    line-height:20px;
    color:#787878;
    border:1px solid #dddddd;
    border-radius:6px;
    &:hover{
        color:#666666;
        border-color:#999999;
    }
`;
export const Button = styled.div`
    display:block;
    float:right;
    font-size:15px;
    cursor:pointer;
    &.reg{
        height:38px;
        width:80px;
        box-sizing:border-box;
        text-align:center;
        margin:9px 5px 0 15px;
        padding:10px 12px;
        color:#EA6F5A;
        border:1px solid #EA6f5a;
        border-radius:20px;
        &:hover{
            border-color:#cA5f5a;
        }
    }
    &.write{
        height:44px;
        width:100px;
        box-sizing:border-box;
        text-align:center;
        background:#Ea6f5a;
        color:#ffffff;
        padding:14px;
        margin:6px 15px 0;
        border-radius:20px;
    }
`;