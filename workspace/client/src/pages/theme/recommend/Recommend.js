import React from "react";
import { Outlet, useParams } from "react-router-dom";
import GlobalStyle from "../../../global/global";
import BasicSpan from "../basicSpan/BasicSpan";
import S from "./style";
import Layout from "../../layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Recommend = ({themeTrip,getTheme}) => {
  const { id } = useParams()
  return (
  <>
  <GlobalStyle/>
  <Layout/>
  <Outlet/>

  <S.Wrapper className="Wrapper">
    <S.TitleWrapper>
    <BasicSpan color={"black"} style1={"medium"} size={"middle"}>겨울이라 좋은 대전 상소동 산림욕장</BasicSpan>
    </S.TitleWrapper>
    <S.ImageWrapper className="ImageWrapper">
      
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
      <S.DetailTitleDiv className="detailTitleDiv">
          <S.DetailTitle className="DetailTitle">
            <BasicSpan color={"gray"} style1={"small"} size={"small"}>상세 일정</BasicSpan>
          </S.DetailTitle>
      </S.DetailTitleDiv>
        <S.Search className="Search">
              <S.Input type="text" placeholder="추가할 검색지를 입력해 주세요." className="input"/>
              <FontAwesomeIcon icon={faSearch} className="iconSearch" />
        </S.Search>
        <S.DetailContentsWrapper>
            <S.DetailContentsLeft>
                
            </S.DetailContentsLeft>
            <S.DetailContentsRight>

            </S.DetailContentsRight>

        </S.DetailContentsWrapper>
    </S.ContentsWrapper>

  </S.Wrapper>
  </>
  );
};

export default Recommend;
