import React from "react";
import { Outlet, useParams } from "react-router-dom";
import GlobalStyle from "../../../global/global";
import BasicSpan from "../basicSpan/BasicSpan";
import S from "./style";
import Layout from "../../layout/Layout";


const Recommend = ({themeTrip,getTheme}) => {
  const { id } = useParams()
  return (
  <>
  <GlobalStyle/>
  <Layout/>
  <Outlet/>

  <S.Wrapper>
    <S.TitleWrapper>
    <BasicSpan color={"black"} style1={"medium"} size={"middle"}>겨울이라 좋은 대전 상소동 산림욕장</BasicSpan>
    </S.TitleWrapper>
    <S.ImageWrapper >
      
      <S.ImageDiv>
      <S.Images src="/img/picture/slide_pohang.jpg"></S.Images>
      </S.ImageDiv>
      <S.ImageDiv>
      <S.Images src="/img/picture/slide_daegu.jpg"></S.Images>
      </S.ImageDiv>
      <S.ImageDiv>
      <S.Images src="/img/picture/slide_yeosu.jpg"></S.Images>
      </S.ImageDiv>
      <S.ImageDiv>
      <S.Images src="/img/picture/slide_yeosu.jpg"></S.Images>
      </S.ImageDiv>
    </S.ImageWrapper>
    <S.ContentsWrapper>

      
    </S.ContentsWrapper>

  </S.Wrapper>
  </>
  );
};

export default Recommend;
