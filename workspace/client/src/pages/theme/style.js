import styled from "styled-components";
import { flexCenterColumn, flexSpaceAroundCenter} from "../../global/common";
import theme from "../../global/theme";

const S = {};

    S.Wrapper = styled.div`
        ${flexCenterColumn}
    `

    S.ImageWrapper = styled.div`
        flex: 0.7;
        ${flexCenterColumn}
    `

    S.MainImg =styled.img`
    background-image: url('Guadalupe.jpeg');
     display:flex;
     width:100vh;
    height:300px;
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
`

S.DropDown=styled.div`
width:48px;
position:relative;
display:inline-block;
&:hover{
  cursor:pointer;
  color: gray;
  .DropDownBox{
    display: flex;
  }
}`

S.DropDownBox = styled.div`
position:absolute;
display:none;
flex-direction:column;
justify-content:space-around;
border-color: black;
border-radius: 12px;
z-index: 1;
height: 72px;
width: 40px;
top:24px;
right: 0;
`
S.HoverButton = styled.div`
color:#656565;
&:hover{
  color:white;
}
`
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