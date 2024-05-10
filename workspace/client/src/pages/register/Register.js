import React, { useState } from "react";
import S from "./style";
import {
  faArrowLeft,
  faHome,
  faCheckCircle as solidCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle as regularCheckCircle } from "@fortawesome/free-regular-svg-icons";

const Register = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate(-1);
  };

  const handleHomePage = () => {
    navigate("/");
  };

  // 남, 여 클릭상태 유지
  const [manFocus, setManFocus] = useState(false);
  const [womanFocus, setWomanFocus] = useState(false);

  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    setChecked(!checked);
  };

  const handleManFocus = () => {
    setManFocus(true);
    setWomanFocus(false);
  };
  const handleWomanFocus = () => {
    setWomanFocus(true);
    setManFocus(false);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleWrapper>
          <S.Title>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="icon"
              onClick={handlePage}
            />
            <S.Register>정보입력</S.Register>
          </S.Title>
          <FontAwesomeIcon
            icon={faHome}
            className="icon"
            onClick={handleHomePage}
          />
        </S.TitleWrapper>
        <S.SubTitle>거의 다 왔어요! 고객님의 정보를 입력해주세요.</S.SubTitle>
        <S.SubExplanation>
          DreamGreenTour는 고객님의 정보를 안전하게 관리합니다.
        </S.SubExplanation>
        <S.RegisterWrapper>
          <S.Form method="post" action="/register">
            <S.InputWrapper>
              <S.Input type="text" placeholder="아이디(이메일계정)" />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.NameInput type="text" placeholder="이름" />
              <S.ManBtn
                style={{ color: manFocus ? "green" : "black" }}
                onClick={handleManFocus}
                className="gender"
                id="gender"
                value="남"
              >
                남
              </S.ManBtn>
              <S.WomanBtn
                style={{ color: womanFocus ? "green" : "black" }}
                onClick={handleWomanFocus}
                className="gender"
                id="gender"
                value="여"
              >
                여
              </S.WomanBtn>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input placeholder="생년월일" id="birth" name="birth" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.NameInput
                placeholder="휴대폰번호"
                id="phoneNum"
                name="phoneNum"
              />
              <S.CheckBox>
                <S.HiddenCheckBox
                  onChange={handleCheckbox}
                  checked={checked}
                  id="foreign"
                  value={checked}
                />
                <FontAwesomeIcon
                  icon={checked ? solidCheckCircle : regularCheckCircle}
                  className="icon"
                />
                <S.CheckText>외국인</S.CheckText>
              </S.CheckBox>
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                placeholder="비밀번호"
                id="password"
                name="password"
                type="password"
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <S.Input
                placeholder="비밀번호 확인"
                id="rePassword"
                name="rePassword"
                type="password"
              />
            </S.InputWrapper>
          </S.Form>
        </S.RegisterWrapper>

        <S.Button onClick={handleHomePage} type="submit">
          다음
        </S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Register;
