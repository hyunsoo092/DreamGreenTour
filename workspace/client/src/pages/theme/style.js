import styled from "styled-components";
import { flexCenterColumn, flexCenterRow, flexSpaceAroundCenter} from "../../global/common";
import theme from "../../global/theme";
import GlobalStyle from "../../global/global";
import reset from "styled-reset";

const S = {};

    S.Wrapper = styled.div`
        ${flexCenterColumn}
        margin-top: 1vh;
        margin-bottom: 1vh;
    `

    S.ImageWrapper = styled.nav`
    width: 80vw;
        ${flexCenterColumn}
    `

    S.MainImg =styled.div`
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
    `
S.P=styled.p`
  margin-top: 20px;
 width: 80%;
 color: gray;
 font-size: 20px;
   font-family: 'Noto Sans KR', sans-serif;
   /* margin-bottom: 10px; */
`
S.DropDownWrap=styled.div`
width: 79vw;
margin: auto;
display: flex;
justify-content: space-between;
padding-top: 15px;
`

S.DropDown=styled.div`
position:relative;
display:inline-block;
        &:hover{
          cursor:pointer;
          /* color: gray; */
          .dropdown-content {display: block;}
          .dropbtn {background-color: #37A551;
                    color: rgb(24,49,83,1);
          }//호버 후 배경색
          } 
        .dropbtn {
          background-color: #F5F6F6; //호버 전 배경색
          color: rgb(24,49,83,1); //글자색
          padding: 13px 32px 13px 32px;
          font-size: 18px;
          width: 10em;
          border:none;
          border-radius: 5px;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f1f1f1;   //리스트 호버 전 배경색
          padding : 12px 16px;
          /* scroll-behavior: auto; */
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
          & a {
              color: rgb(24,49,83,1);
              padding: 12px 16px;
              text-decoration: none;
              display: block;
           }
          & a:hover 
          {background-color: #37A551;
          display: block;
          border-radius: 5px;
          }   //리스트 호버 후 배경색
        }
`



S.ThemeTravel=styled.div`
    width: 80vw;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.PALLETE.primary["inputBack"]};
    padding-top:20px;

  
`
S.ThemeTravelBanner=styled.div`
display: flex;
margin: auto;
border-radius: 10px;
padding: 10px 10px 10px 10px;
justify-content: space-evenly;

`
S.ThemeImageWrapper=styled.div`
margin-right: 1%;
margin-left: 1%;
display: inline-block;
`
S.ThemeImageDiv = styled.div`
width: 300px;
height: 260px;
border-radius: 10px;
box-shadow: 5px 5px 5px gray;
display: flex;

`
S.ThemeImage = styled.img`
width: 300px;
height: 260px;
border-radius: 10px;
`
S.Price=styled.div`
width: 300px;
height: 30px;
padding: 0px 10px 0px 10px;
font-size: ${({theme}) => theme.FONT_SIZE["h4"]};
font-weight: 600;
`
S.TitleDiv=styled.div`
width: 300px;
height: 50px;
font-size: ${({theme}) => theme.FONT_SIZE["h5"]};
font-weight: 500;
.titleSpan{
  padding: 0px 10px 0px 10px;
  /* display: -webkit-box; */
  max-width: calc(100% - 5px);
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space:nowrap;
  line-height: 1.2;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
`

S.HeartIcon = styled.div`
width: 300px;
height: 50px;
display: flex; 
justify-content: space-between;
`
S.SpanTag = styled.span`
${flexSpaceAroundCenter}
margin-top: 5px;
margin-left: 10px;
font-size: 18px;
color: #94B396;
`
S.Button = styled.button`
    cursor: pointer;
    background: none;
    font-size: 23px;
    
    & svg.heartIcon path{
      color : #37A551
    }
`
S.Input = styled.input`
  height: 40px;
  margin-left: 40px;
  text-align: start;

  width: 400px;
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
  justify-content: center;
  align-items: center;
  .iconSearch {
    background: none;
    font-size: 24px;
    padding: 4px;
    margin-left: -45px;
    cursor: pointer;
  }
`;





S.Footer = styled.div`
width: 80vw;
height: 500px;
/* background-color:  ${({ theme }) => theme.PALLETE.primary["inputBack"]}; */
`
export default S;