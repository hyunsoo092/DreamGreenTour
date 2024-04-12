import React, { useState } from "react";
import S from "./style";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Approve = () => {
  const navigate = useNavigate();

  const handlePage = () => {
    navigate(-1);
  };

  const handleHomePage = () => {
    navigate("/");
  };

  const [option, setOption] = useState("form1");

  const handleChangeForm = (event) => {
    setOption(event.target.value);
  };

  const [manFocus, setManFocus] = useState(true);
  const [womanFocus, setWomanFocus] = useState(true);

  const handleManFocus = () => {
    setManFocus(false);
    setWomanFocus(true);
  };
  const handleWomanFocus = () => {
    setWomanFocus(false);
    setManFocus(true);
  };

  const handleOutsideClick = (event) => {
    // 클릭된 요소가 버튼이나 버튼을 포함하는 요소인 경우 활성 상태를 유지합니다.
    if (!event.target.closest("button.gender")) {
      if (manFocus) {
        setWomanFocus(false);
        setManFocus(true);
      } else if (womanFocus) {
        setWomanFocus(true);
        setManFocus(false);
      }
    }
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
            <S.Approve>본인인증</S.Approve>
          </S.Title>
          <FontAwesomeIcon
            icon={faHome}
            className="icon"
            onClick={handleHomePage}
          />
        </S.TitleWrapper>
        <S.SubTitle>회원가입을 위해 본인인증이 필요해요.</S.SubTitle>
        <S.RadioWrapper>
          <label>
            <S.RadioContainer>
              <S.Radio
                name="option"
                value="form1"
                checked={option === "form1"}
                onChange={handleChangeForm}
              />
              <S.RadioText>문자 인증</S.RadioText>
            </S.RadioContainer>

            {option === "form1" && (
              <S.Form onClick={handleOutsideClick}>
                <S.NameInput type="text" placeholder="이름" />
                <S.ManBtn
                  isActive={manFocus}
                  onFocus={handleManFocus}
                  className="gender"
                >
                  남
                </S.ManBtn>
                <S.WomanBtn
                  isActive={womanFocus}
                  onFocus={handleWomanFocus}
                  className="gender"
                >
                  여
                </S.WomanBtn>
                <S.InputWrapper>
                  <S.Input placeholder="생년월일" />
                  <S.InputBtn>실명인증 요청</S.InputBtn>
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.Input placeholder="휴대폰번호" />
                  <S.InputBtn>인증번호 요청</S.InputBtn>
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.Input placeholder="인증번호" />
                  <S.ApproveBtn>인증하기</S.ApproveBtn>
                </S.InputWrapper>
              </S.Form>
            )}
          </label>
          <label>
            <S.RadioContainer>
              <S.Radio
                name="option"
                value="form2"
                checked={option === "form2"}
                onChange={handleChangeForm}
              />
              <S.RadioText>이메일 인증</S.RadioText>
            </S.RadioContainer>

            {option === "form2" && (
              <S.Form onClick={handleOutsideClick}>
                <S.NameInput type="text" placeholder="이름" />
                <S.ManBtn
                  isActive={manFocus}
                  onFocus={handleManFocus}
                  className="gender"
                >
                  남
                </S.ManBtn>
                <S.WomanBtn
                  isActive={womanFocus}
                  onFocus={handleWomanFocus}
                  className="gender"
                >
                  여
                </S.WomanBtn>
                <S.InputWrapper>
                  <S.Input placeholder="생년월일" />
                  <S.InputBtn>실명인증 요청</S.InputBtn>
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.Input placeholder="이메일" />
                  <S.InputBtn>인증번호 요청</S.InputBtn>
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.Input placeholder="인증번호" />
                  <S.ApproveBtn>인증하기</S.ApproveBtn>
                </S.InputWrapper>
              </S.Form>
            )}
          </label>

          <label>
            <S.RadioContainer>
              <S.Radio
                name="option"
                value="form3"
                checked={option === "form3"}
                onChange={handleChangeForm}
              />
              <S.RadioText>휴대폰 본인인증</S.RadioText>
            </S.RadioContainer>
          </label>
        </S.RadioWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Approve;
