import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../layout/Layout";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
  return (
    <>
      <S.Head>
        <Layout />
      </S.Head>
      <S.Wrapper>
        <S.Title>후기를 보려는 여행지를 선택하세요</S.Title>
        <S.LocationWrapper>
          <S.LocationBtn>서울</S.LocationBtn>
          <S.LocationBtn>부산</S.LocationBtn>
          <S.LocationBtn>경주</S.LocationBtn>
          <S.LocationBtn>울산</S.LocationBtn>
          <FontAwesomeIcon icon={faAngleRight} className="icon" />
        </S.LocationWrapper>

        <Outlet />
      </S.Wrapper>
    </>
  );
};

export default Review;

