import React, { useEffect, useState } from "react";
import { Outlet,Link, RouterProvider, NavLink } from "react-router-dom";
import S from "./style.js";
import BasicSpan from "./basicSpan/BasicSpan.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../global/global.js";
import Layout from "../layout/Layout.js";
import router from "../../routes/router.js";
import ThemeComponent from "./ThemeComponent";

const Theme = () => {
  const [theme, setTheme] = useState([]);
  const [error, setError] = useState(false)

  const getTheme = async () => {
    try {
        const response = await fetch('http://localhost:4000/themeTrip')
        const datas = await response.json();
        setTheme(datas)
    } catch (error) {
        setError(error)
    }
}
useEffect(()=>{
    getTheme()
}, [])



  return (
    <>
    
            <GlobalStyle />
            <Layout />


    <S.Wrapper>
      <NavLink to={'/theme'}>
    <S.ImageWrapper>
    {/* src={process.env.PUBLIC_URL + './Guadalupe.jpeg'}  */}
                <S.MainImg className="MainImg" >
                  <BasicSpan color={"white"} style1={'medium'} size={'heading'} >이색 테마 여행</BasicSpan>  
                  <BasicSpan color={"black"} style1={'small'} size={'small'}>#데이트 코스 #추천 #국내</BasicSpan>
                </S.MainImg>
      </S.ImageWrapper>
      </NavLink>


            <S.P>상상만 하던 내 마음속의 여행</S.P>
            <S.P>키워드로 검색해 보세요.</S.P>


</S.Wrapper>

<S.DropDownWrap className="dropdownWrap">
      <S.DropDown className="dropdown">
    
  <button class="dropbtn">테마 선택</button>
  <div class="dropdown-content">
    <a href="#">데이트 코스</a>
    <a href="#">가족 여행 코스</a>
    <a href="#">가을</a>
    <a href="#">겨울</a>
    <a href="#">여름</a>
    <a href="#">봄</a>
  
</div>
      </S.DropDown>
      </S.DropDownWrap>
      
<S.Wrapper>
<S.ThemeTravel>
<S.ThemeTravelBanner>
  {theme.map((themeTrip,i)=>(
    <ThemeComponent key={i} themeTrip={themeTrip} getTheme={getTheme}/>
  ))}
</S.ThemeTravelBanner>
</S.ThemeTravel>
</S.Wrapper>
    
</>

  );
};

export default Theme;
