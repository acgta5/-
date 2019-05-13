import styled from 'styled-components'

export const LoginWrapper = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    background:#f1f1f1;
    margin:0 auto;
    margin-top:56px;
`;
export const LoginBox = styled.div`
    margin:100px auto;
    width:400px;
    padding:30px 0;
    text-align:center;
    background:#ffffff;
    box-shadow:0 0 8px rgba(0,0,0,.1)
`;
export const Input = styled.input`
    display:block;
    width:220px;
    height:30px;
    margin:10px auto;
    line-height:30px;
    font-size:16px;
    padding:0px 10px;
    &:focus{
        border:2px solid #0099ff;
    }
`;
export const Button = styled.button`
    width:240px;
    height:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    background:#3194d0;
    border:none;
    outline:none;
    color:#fff;
    cursor:pointer;
    &:hover{
        background:#33ffcc;
        
    }
`;