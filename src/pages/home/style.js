import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    padding-top:30px;
    padding-bottom:10px;
    margin:0px auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    float:left;
    padding-left:15px;
    width:625px;
    .banner{
        width:625px;
        height:270px;
        overflow:hidden;
        position:relative;
        cursor:pointer;
        ul{
            width:2500px;
            height:270px;
            position:relative;
            li{
                float:left;
                width:625px;
                img{
                    width:625px;
                    height:270px;
                }
            }
        }
        .btns{
            position:absolute;
            top:240px;
            width:625px;
            text-align:center;
            span{
                display:inline-block;
                margin:0 5px;
                width:20px;
                height:3px;
                background:#333333;
                &.active{
                    background:#ffffff;
                }
            }
        }
        &:hover{
            button{
                background:#666666;
                opacity:0.6;
                color:#ffffff;
            }
        }
        button{
            position:absolute;
            width:40px;
            height:50px;
            line-height:50px;
            font-size:16px;
            cursor:pointer;
            background:transparent;
            outline:none;
            border:none;
            color:transparent;
        }
        button.left{
            left:0px;
            top:50%;
            text-align:center;
            padding-right:10px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;
            margin-top:-25px;
            
        }
        button.right{
            right:0px;
            text-align:center;
            padding-left:10px;
            border-top-left-radius:10px;
            border-bottom-left-radius:10px;
            top:50%;
            margin-top:-25px;
        }
    }
`;
export const HomeRight = styled.div`
    float:left;
    width:280px;
    margin-left:40px;
`;
//左边部分
export const TopicWrapper = styled.div`
    padding : 20px 0 10px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.a`
    display:block;
    float:left;
    height:32px;
    line-height:32px;
    margin-right:16px;
    background:#fdfdfd;
    border:1px solid #dcdcdc;
    border-radius:4px;
    font-size:14px;
    padding-right:10px;
    img{
        wdith:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`;
export const TopicMore = styled.a`
    color:#999999;
    display:block;
    float:left;
    height:32px;
    font-size:14px;
    line-height:32px;
`;
export const ListItem = styled.div`
    padding:20px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    .listPic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    p.title{
        font-size:18px;
        line-height:1.5;
        color:#333333;
        font-weight:700;
        &:hover{
            text-decoration:underline;
        }
    }
    p{
        font-size:13px;
        color:#999999;
        line-height:24px;
    }
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    margin:30px 0;
    cursor:pointer;
    line-height:40px;
    text-align:center;
    color:#ffffff;
    background:#a5a5a5;
    border-radius:20px;
`;
// 右边部分
export const RecommendLink = styled.a`
    display:block;
    img{
        width:280px;
        height:50px;
    }
`;
export const DownloadApp = styled.div`
    cursor:pointer;
    border:1px solid #dcdcdc;
    margin-top:5px;
    margin-bottom:30px;
    padding:10px 22px;
    border-radius:6px;
    background:#ffffff;
    overflow:hidden;
    img{
        display:block;
        float:left;
        width:60px;
        height:60px;   
    }
    div{
        margin-left:70px;
        height:60px;
        .app{
            text-align:center;
            font-size:18px;
            line-height:30px;
        }
        .des{
            font-size:14px;
            color:#cccccc;
            line-height:30px;
        }
    }
    
`;
export const AuthorWrapper = styled.div`
    overflow:hidden;
`;
export const AuthorTitle = styled.div`
    overflow:hidden;
    color:#969696;
    font-size:14px;
    .recommend{
        display:block;
        float:left;
    }
    .switch{
        display:block;
        float:right;
        font-size:14px;
        color:#969696;
        .spin{
            display:block;
            float:left;
            margin-right:5px;
            transition:all .3s ease-out;
            transform-origin:center center;
        }
    }
`;
export const AuthorItem = styled.div`
    overflow:hidden;
    margin:10px 0;
    img{
        display:block;
        float:left;
        width:48px;
        height:48px;
        border-radius:48px;
    }
    div{
        float:left;
        margin-left:20px;
        .title{
            font-size:14px;
            color:#333333;
            line-height:28px;
        }
        .des{
            font-size:12px;
            color:#969696;
            line-height:20px;
        }
    }
    a.addAuthor{
        display:block;
        float:right;
        margin-top:-10px;
        line-height:48px;
        color:#090;
        font-size:14px;
    }
`;
//回到顶部
export const ScrollTop = styled.div`
    position:fixed;
    right:30px;
    bottom:30px;
    cursor:pointer;
    font-size:12px;
    width:50px;
    height:50px;
    line-height:50px;
    border:1px solid #666666;
    color:#666666;
    border-radius:50px;
`;

