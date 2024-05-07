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
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
      border-radius: 15px;
    `

    S.ImageWrapper = styled.div`
    width: 80vw;
        ${flexCenterRow}
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
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
      height: 100%;
      padding:20px;
      margin-top:20px;
      box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
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
/* background-color: beige; */
width: 50%;
max-height: 1500px;
${flexCenterColumn}
border-right: 1px solid rgba(0,0,0,0.2);
`
S.PlanWrapper = styled.div`
/* background-color: aqua; */
width: 90%;
height: 100%;
flex-direction: column;
align-items: center;
display: flex;
margin:20px 0px 20px 0px;
`
S.Plan = styled.div`
/* background-color: black; */
width: 90%;
height: 12vh;
margin:20px 0px 20px 0px;
border-radius: 5px;
box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.1);
`


S.DetailContentsRight = styled.div`
width: 50%;
max-height: 100%;
/* ${flexCenterColumn} */
`
S.DetailContentsContainer = styled.div`
width: 100%;
max-height: 100%;
border-radius: 5px;
/* ${flexCenterColumn} */
`
S.PlaceDetailImgDiv = styled.div`
background-color: aqua;
width: 90%;
height: 30vh;
flex-direction: column;
align-items: center;
display: flex;
margin:40px;
`
S.PDImage=styled.img`
width: 100%;
height: 100%;
border-radius: 5px;
`
S.PDContentsDiv = styled.div`
width: 90%;
height: 35vh;
flex-direction: column;
align-items: center;
display: flex;
margin:5px 40px 10px 40px;
background-color: #F3F3F3;
border-radius: 5px;
`
export default S;