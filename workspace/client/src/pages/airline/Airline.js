import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../global/global";
import theme from "../../global/theme";
import Layout from "../layout/Layout";
import S from "./style";
import TapComponent from "./TapComponent";
import AirWeekSale from "./AirWeekSale";

const Airline = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />

      <S.AirHotelTabDiv>
        <S.AirTabHeadingDiv>
          <S.AirTabHeading>항공</S.AirTabHeading>
        </S.AirTabHeadingDiv>
        <S.HotelTabHeadingDiv>
          <S.HotelTabHeading>호텔</S.HotelTabHeading>
        </S.HotelTabHeadingDiv>
      </S.AirHotelTabDiv>

      <S.DivVisualRoll>
        <S.Image1 src="/img/picture/slide_jeju.jpg" />
        <S.Image2 src="/img/picture/slide_pohang.jpg" />
        <S.Image3 src="/img/picture/slide_daegu.jpg" />
      </S.DivVisualRoll>

      <>
        <TapComponent />
      </>

      <S.AirBanner1>
        <S.AirBannerImage src="/img/airbanner.png"></S.AirBannerImage>
      </S.AirBanner1>

      <>
        <AirWeekSale />
      </>
    </ThemeProvider>
  );
};

export default Airline;
