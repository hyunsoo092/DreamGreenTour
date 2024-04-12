import React from "react";
import { Outlet,Link } from "react-router-dom";
import S from "./style.js";
import DropDown from 'react-dropdown';

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

// const options = [
//   'one', 'two', 'three'
// ];
// const defaultOption = options[0];
// <DropDown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;

  return (
    <>
    <S.Wrapper>
    <S.ImageWrapper>
                <S.MainImg src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} >
                </S.MainImg>
      </S.ImageWrapper>
            <S.P>상상만 하던 내 마음속의 여행</S.P>
            <S.P>키워드로 검색해 보세요.</S.P>
      <S.DropDown><span>박덕이</span>
        <S.DropDownBox>
          <S.HoverButton>
            {/* <BsFillpencilFill 
              size={24} 
              onClick={()=>{setIsEdit(true);}}/> */}
          </S.HoverButton>
          <S.HoverButton>
            {/* <BsFillpencilFill 
              size={24} 
              onClick={()=>{setIsEdit(true);}}/> */}
          </S.HoverButton>
        </S.DropDownBox>
      </S.DropDown>


      <S.ThemeTravel>
          <S.ThemeTravelBanner className="themeTravelBanner">
          <S.ThemeImageWrapper><Link to={'/'}><S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} /></Link></S.ThemeImageWrapper>
          <S.ThemeImageWrapper>
          <Link to={'/'} >
            <S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} />
          <S.Title>겨울이라 좋은 대전 상소동 산림욕장 얼음동산,우암사적공원,대청호,당일여행 </S.Title>
          </Link></S.ThemeImageWrapper>
      
          <S.ThemeImageWrapper>
          <Link to={'/'} >
            <S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} />
          <S.Title>겨울이라 좋은 대전 상소동 산림욕장 얼음동산,우암사적공원,대청호,당일여행 </S.Title>
          </Link></S.ThemeImageWrapper>
      
          <S.ThemeImageWrapper>
          <Link to={'/'} >
            <S.ThemeImage src={process.env.PUBLIC_URL + './Guadalupe.jpeg'} />
          <S.Title>겨울이라 좋은 대전 상소동 산림욕장 얼음동산,우암사적공원,대청호,당일여행 </S.Title>
          </Link></S.ThemeImageWrapper>
      
          </S.ThemeTravelBanner>
      </S.ThemeTravel>
    </S.Wrapper>
    </>
  );
};

export default Theme;
