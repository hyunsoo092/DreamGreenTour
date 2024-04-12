<<<<<<< HEAD
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
=======
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../global/global";
import theme from "../../global/theme";
import Layout from "../layout/Layout";
import S from "./style";
import TapComponent from "./TapComponent";
import AirWeekSale from "./AirWeekSale";
>>>>>>> 92cd4a6d6ed61a5d882a29af511bc3339a6af29d


const Airline = () => {
<<<<<<< HEAD
 

  return (
    <div>
      항공 페이지
      <Outlet />
    </div>
  );
=======
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
>>>>>>> 92cd4a6d6ed61a5d882a29af511bc3339a6af29d
};

export default Airline;
