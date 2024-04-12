import React from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPreviousUrl } from "../../modules/pageControl";
const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname + location.search;
  console.log(path);
  dispatch(setPreviousUrl(path));
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <S.List>
          <S.Login>
            <Link to={"/login"}>로그인</Link>
          </S.Login>
          <S.Register>
            <Link to={"/join"}>회원가입</Link>
          </S.Register>
        </S.List>
      </S.LoginWrapper>

      <S.LogoWrapper>
        <S.Search>
          <S.Logo>DreamGreenTour</S.Logo>
          <S.Input type="text" placeholder="검색어를 입력해 주세요" />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </S.Search>
        <Link to={"/mypage"}>
          <FontAwesomeIcon icon={faUser} className="icon" />
        </Link>
      </S.LogoWrapper>

      <S.MenuWrapper>
        <S.Menu>
          <FontAwesomeIcon icon={faBars} className="icon" />
          전체메뉴
        </S.Menu>
        <Link to={"/tour"}>여행</Link>
        <Link to={"/review"}>후기</Link>
        <Link to={"/theme"}>테마</Link>
        <Link to={"/airline"}>항공/숙박</Link>
      </S.MenuWrapper>

      <S.Main>
        <Outlet />
      </S.Main>
    </S.Wrapper>
  );
};

export default Layout;
