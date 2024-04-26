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
     width: 20vw;
    height: 310px;
    border-radius: 15px;
    `
    S.ContentsWrapper=styled.div`
      width: 80vw;
        ${flexCenterColumn}
      height: 100vh;
      background-color: aqua;
      margin-top:20px;
    `
export default S;