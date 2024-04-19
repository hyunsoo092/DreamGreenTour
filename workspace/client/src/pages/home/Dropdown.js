import React from "react";
import styled, { css } from "styled-components";
import useDetectClose from "../../hooks/useDetectClose "

const Dropdown = () => {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [boardIsOpen, boardRef, boardHandler] = useDetectClose(false);


  return (
    <Wrapper>
      <S.DropdownContainer>
        <S.DropdownButton onClick={myPageHandler} ref={myPageRef}>
          마이페이지
        </S.DropdownButton>
        <S.Menu isDropped={myPageIsOpen}>
          <S.Ul>
            <S.Li>
              <S.LinkWrapper href="#1-1">메뉴1</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper href="#1-2">메뉴2</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper href="#1-3">메뉴3</S.LinkWrapper>
            </S.Li>
          </S.Ul>
        </S.Menu>
      </S.DropdownContainer>

      <S.DropdownContainer>
        <S.DropdownButton onClick={boardHandler} ref={boardRef}>
          게시판
        </S.DropdownButton>
        <S.Menu isDropped={boardIsOpen}>
          <S.Ul>
            <S.Li>
              <S.LinkWrapper href="#2-1">메뉴1</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper href="#2-2">메뉴2</S.LinkWrapper>
            </S.Li>
            <S.Li>
              <S.LinkWrapper href="#2-3">메뉴3</S.LinkWrapper>
            </S.Li>
          </S.Ul>
        </S.Menu>
      </S.DropdownContainer>


    </Wrapper>
  );
};

export default Dropdown;

