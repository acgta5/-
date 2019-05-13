import styled from 'styled-components'

export const DetailWrapper = styled.div`
    padding-top:10px;
    width:100%;
    margin:0px auto;
    overflow:hidden;
`;
export const Content = styled.div`
    width:620px;
    margin:0 auto;
    padding-top:20px;
    padding-bottom:20px;
    text-align:center;

    p{
        text-align:left;
        color:#2f2f2f;
        font-size:16px;
        line-height:1.7;
        margin-bottom:25px;
    }
`;
export const Header = styled.div`
    margin:20px 0;
    font-size:34px;
    text-align:left;
    font-weight:bold;

`;
export const Ads = styled.div`
    width:150px;
    height:150px;
    position:fixed;
    color:#ffffff;
    line-height:150px;
    right:100px;
    top:100px;
    background:url(https://cdn2.jianshu.io/assets/web/qingteng-be381813e92784a4c01c608834f76eb2.png);
    background-size:150px 150px;
    border:1px solid #dcdcdc;
`;