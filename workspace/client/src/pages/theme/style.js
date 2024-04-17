import styled from "styled-components";
import { flexCenterColumn, flexSpaceAroundCenter} from "../../global/common";
import theme from "../../global/theme";
import GlobalStyle from "../../global/global";
import reset from "styled-reset";

const S = {};

    S.Wrapper = styled.div`
        ${flexCenterColumn}
        margin-top: 1vh;
    `

    S.ImageWrapper = styled.nav`
        /* flex: 0.7; */
    width: 80vw;
        ${flexCenterColumn}
    `

    S.MainImg =styled.div`
    /* background-image: url('Guadalupe.jpeg'); */
    background-image: url("/img/picture/sakura.jpeg");
    background-repeat: repeat;
    background-position: center;
     width:80vw;
    height:300px;
    ${flexCenterColumn}
    align-content: center;
    position: relative; 
    z-index: 100;
    ::before{
      z-index: -100; 
      background-color: rgba(0,0,0,0.2);
     position: absolute; 
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.6;
    }
    /* &a{

    } */
    `
    S.ButtonWrapper = styled.div`
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 0 100px 0;
    `
S.P=styled.p`
  margin-top: 10px;
 width: 80%;
 color: gray;
   font-family: 'Noto Sans KR', sans-serif;
`


S.DropDown=styled.div`
width:60px;
position:relative;
display:inline-block;
&:hover{
  cursor:pointer;
  color: gray;
  .DropDownBox{
    display: flex;
  }
}`

S.ThemeTravel=styled.div`
    width: 80%;
    border-radius: 10px;
    /* ${flexSpaceAroundCenter} */
    background-color: ${({ theme }) => theme.PALLETE.primary["bannerBack"]};
    padding-top:20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
S.ThemeTravelBanner=styled.div`
display: flex;
margin: auto;
border-radius: 10px;
margin-bottom: 5px;
justify-content: center;
`
S.ThemeImageWrapper=styled.div`
margin-right: 1%;
margin-left: 1%;
`
S.ThemeImage = styled.img`
width: 250px;
height: 250px;
/* background-color: black; */
border-radius: 10px;
box-shadow: 5px 5px 5px gray;
display: flex;

`
S.Title=styled.p`
max-width: 260px;
height: 4.8em;
word-wrap: break-word;
white-space:nowmal;
line-height: 1.2;
-webkit-line-clamp: 3;
overflow: hidden;
color: ${({ theme }) => theme.PALLETE.fontNatural["70"]};
font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
margin-top: 20px;

`



export default S;