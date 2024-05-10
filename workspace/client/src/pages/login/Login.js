import React, { useState } from "react";
import S from "./style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheckCircle as solidCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as regularCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // 아이디 저장 체크 이미지 변환 로직
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  };
  // 이전 페이지로 가기 위한 로직
  const navigate = useNavigate();

  const handlePage = () => {
    navigate(-1);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="icon"
            onClick={handlePage}
          />
          <S.Login>로그인</S.Login>
        </S.Title>
        <S.Logo>
          <S.LogoTitle>DreamGreenTour</S.LogoTitle>
        </S.Logo>
        <S.Input>
          <S.Email type="text" placeholder="아이디(이메일계정)"></S.Email>
          <S.Password type="password" placeholder="비밀번호"></S.Password>
        </S.Input>
        <S.StoreEmail>
          <S.HiddenCheckBox onChange={handleCheckbox} />
          <S.CheckBox>
            <FontAwesomeIcon
              icon={checked ? solidCheckCircle : regularCheckCircle}
              className="icon"
            />
            <S.CheckText>아이디 저장</S.CheckText>
          </S.CheckBox>
        </S.StoreEmail>
        <S.BtnWrapper>
          <S.LoginBtn type="button">로그인</S.LoginBtn>
        </S.BtnWrapper>
        <S.SearchWrapper>
          <div>
            <S.SearchEmail>아이디 찾기 |</S.SearchEmail>
            <span> 비밀번호 찾기</span>
          </div>
          <Link to={"/join"} className="join">
            회원가입
          </Link>
        </S.SearchWrapper>
        <S.EasyLoginWrapper>
          <div>간편하게 로그인하기</div>
          <div>
            <S.Naver></S.Naver>
            <S.Kakao></S.Kakao>
            <S.Apple></S.Apple>
          </div>
        </S.EasyLoginWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
