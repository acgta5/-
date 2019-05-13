import styled from 'styled-components'

export const WriteWrapper = styled.div`
    position:absolute;
    left:0px;
    top:56px;
    right:0px;
    bottom:0px;
    background:#f1f1f1;
    margin:0 auto;
`; 
export const WriteBox = styled.div`
    width:600px;
    margin 100px auto;
    padding:30px 0;
    background:#ffffff;
`;
export const WriteTitle = styled.input`
    display:block;
    margin:0px auto;
    width:400px;
    padding:10px;
    height:30px;
    line-height:30px;
    font-size:#777777;
    font-size:16px;
`;
export const WriteContent = styled.textarea`
    display:block;
    margin:10px auto;
    width:400px;
    padding:10px;
    height:200px;
    line-height:30px;
    font-size:#777777;
    font-size:16px;
    resize:none;
`;