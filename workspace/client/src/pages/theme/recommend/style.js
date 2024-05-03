import styled from "styled-components";
import { flexCenterColumn, flexCenterRow } from "../../../global/common";
import reset from "styled-reset";
import GlobalStyle from "../../../global/global";
import theme from "../../../global/theme";

const S = {};
      S.Wrapper = styled.div`
      ${flexCenterColumn}
      margin-top: 1vh;
      margin-bottom: 1vh;
      `
      S.TitleWrapper = styled.div`
      ${flexCenterColumn}
      width: 80vw;
      height: 80px;
      margin-top: 1vh;
      align-items: center;
      box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
      border-radius: 15px;
    `

    S.ImageWrapper = styled.div`
    width: 80vw;
        ${flexCenterRow}
    box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.1);
    height  : 320px;
    margin-top: 10px;
    border-radius: 15px;
    `

    S.ImageDiv=styled.div`
    width: 20vw; 
    height: 310px;
    margin-right: 2px;
    margin-left: 2px;
    border-radius: 15px;
    `
    S.Images=styled.img`
     width: 19vw;
    height: 310px;
    border-radius: 15px;
    `
    S.ContentsWrapper=styled.div`
      width: 80vw;
        /* ${flexCenterColumn} */
      height: 100vh;
      padding:20px;
      margin-top:20px;
      box-shadow: 0px 4px 12px 0px rgba(0,0,0,0.1);
      border-radius: 15px;
    `
    S.DetailTitleDiv=styled.div`
     /* ${flexCenterColumn} */
      width: 78vw;
      height: 50px;
      align-items: center;
      border-bottom: solid 1px gray;
      display: flex;
    `
    S.DetailTitle=styled.div`
    width: 80vw;
    height: 40px;
    `

S.Input = styled.input`
height: 50px;
margin-top: 15px;
text-align: start;
display: flex;
font-family: ${theme.FONT_FAMILY.secondary};
width: 500px;
font-size:${theme.FONT_SIZE.h6};
padding-left: 20px;
border-radius: 10px;
background-color: #f5f6f6;
border: none;
&:hover{
        border: solid 2px #006516;
} 
`;
S.Search = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
.iconSearch {
  background: none;
  font-size: 24px;
  padding: 4px;
  margin-left: -45px;
  cursor: pointer;
  padding-top: 20px;
}
`;
S.DetailContentsWrapper=styled.div`
width: 78vw;
display: flex;
margin-top: 10px;
`
S.DetailContentsLeft = styled.div`
background-color: aqua;
width: 50%;
height: 2000px;
`
S.DetailContentsRight = styled.div`
background-color: beige;
width: 50%;
height: 100%;

`

export default S;