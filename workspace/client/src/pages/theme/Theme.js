import React from "react";
import { Outlet,Link, RouterProvider, NavLink } from "react-router-dom";
import S from "./style.js";
import BasicSpan from "./basicSpan/BasicSpan.jsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../global/global.js";
import Layout from "../layout/Layout.js";
import router from "../../routes/router.js";

const Theme = () => {
//   const [theme, setTheme] = useState([]);
//   const [error, setError] = useState(false)

//   const getTheme = async () => {
//     try {
//         const response = await fetch('http://localhost:4000/theme')
//         const datas = await response.json();
//         setTheme(datas)
//     } catch (error) {
//         setError(error)
//     }
// }

// useEffect(()=>{
//     getTheme()
// }, [])

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
                  {/* 나중에 a태그 */}
                  <BasicSpan color={"black"} style1={'small'} size={'small'}>#데이트 코스 #추천 #국내</BasicSpan>
                </S.MainImg>
      </S.ImageWrapper>
      </NavLink>


            <S.P>상상만 하던 내 마음속의 여행</S.P>
            <S.P>키워드로 검색해 보세요.</S.P>


      <S.DropDown>
     <span>드롭다운자리</span>
      </S.DropDown>




      <S.ThemeTravel>
          <S.ThemeTravelBanner className="themeTravelBanner">
          <S.ThemeImageWrapper><Link to={'/theme/recommend'}><S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} /></Link></S.ThemeImageWrapper>
          <S.ThemeImageWrapper>
          <Link to={'/theme/recommend'} >
            <S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} />
          <S.Title>겨울이라 좋은 대전 상소동 산림욕장 얼음동산,우암사적공원,대청호,당일여행 </S.Title>
          </Link></S.ThemeImageWrapper>
      
          <S.ThemeImageWrapper>
          <Link to={'/theme/recommend'} >
            <S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} />
          <S.Title>겨울이라 좋은 대전 상소동 산림욕장 얼음동산,우암사적공원,대청호,당일여행 </S.Title>
          </Link></S.ThemeImageWrapper>
      
          <S.ThemeImageWrapper>
          <Link to={'/theme/recommend'} >
            <S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} />
    <Outlet/>
          <S.Title>겨울이라 좋은 대전 상소동 산림욕장 얼음동산,우암사적공원,대청호,당일여행 </S.Title>
          </Link></S.ThemeImageWrapper>
      
          </S.ThemeTravelBanner>
      </S.ThemeTravel>
    </S.Wrapper>
    
    </>
  );
};

export default Theme;
