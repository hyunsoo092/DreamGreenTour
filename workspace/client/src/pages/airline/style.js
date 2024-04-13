import styled from "styled-components";
import {
    flexCenterColumn,
    flexCenterRow,
    flexEvenlyCenter,
    flexSpaceAroundCenter,
} from "../../global/common";

const S = {};

S.DivVisualRoll = styled.div`
    box-sizing: border-box;
    height: 480px;
    position: relative;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;

    & * {
        box-sizing: border-box;
    }
`;

S.AirHotelTabDiv = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;

    & * {
        box-sizing: border-box;
    }
`;

S.AirTabHeadingDiv = styled.div`
    width: 100px;
    height: 50px;
    position: absolute;
    left: 198px;
    bottom: 8px;
    top: 7px;
`;

S.AirTabHeading = styled.div`
    color: #37a551;
    text-align: left;
    font-family: "NotoSansKr-Bold", sans-serif;
    font-size: 42px;
    line-height: 42px;
    font-weight: 700;
    position: absolute;
    left: 9px;
    top: calc(50% - 21px);
    width: 94px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.HotelTabHeadingDiv = styled.div`
    width: 100px;
    height: 50px;
    position: absolute;
    left: 311px;
    bottom: 8px;
    top: 7px;
`;

S.HotelTabHeading = styled.div`
    color: #bdbfbf;
    text-align: left;
    font-family: "NotoSansKr-Bold", sans-serif;
    font-size: 42px;
    line-height: 42px;
    font-weight: 700;
    position: absolute;
    width: 94px;
    left: 17px;
    top: calc(50% - 21px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.SearchDiv = styled.div`
    box-sizing: border-box;
    background: #f3fcf4;
    width: 1296px;
    height: 322px;
    border: solid 3px black;
    border-radius: 20px;
    position: relative;
    margin: 20px auto;
    margin-top: 20px;
    margin-bottom: 20px;
    & * {
        box-sizing: border-box;
    }
`;
const Image = styled.img`
    width: 920px;
    height: 580px;
    overflow: hidden;
    object-fit: cover;
`;

S.Image1 = styled(Image)`
    position: absolute;
    left: -400px;
    top: 0px;
`;

S.Image2 = styled(Image)`
    position: absolute;
    left: 540px;
    top: 0px;
`;

S.Image3 = styled(Image)`
    position: absolute;
    left: 1480px;
    top: 0px;
`;

S.Tablist = styled.div`
    width: 756px;
    height: 32px;
    position: absolute;
    left: 100px;
    top: calc(50% - 119px);
    overflow: hidden;
`;

S.DivAntTabsTab1 = styled.div`
    width: 38.03px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    top: 0px;
`;
S.DivAntTabsTab2 = styled.div`
    width: 38.03px;
    position: absolute;
    left: 70.03px;
    bottom: 0px;
    top: 0px;
`;
S.DivAntTabsTab3 = styled.div`
    width: 57.05px;
    position: absolute;
    left: 140.06px;
    bottom: 0px;
    top: 0px;
`;
S.RoundTripTab = styled.div`
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
    text-align: left;
    font-family: "Pretendard", "Noto Sans KR";
    font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h3"]};
    position: relative;
    width: 38.23px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.OnewayTab = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["50"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    text-align: left;
    font-family: "Pretendard", "Noto Sans KR";
    font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h3"]};
    position: relative;
    width: 38.23px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.MultipleTripTab = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["50"]};
    text-align: left;
    font-family: "Pretendard", "Noto Sans KR";
    font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
    line-height: ${({ theme }) => theme.FONT_LINE["h3"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: relative;
    width: 57.25px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`;

S.DivAntTabsInkBar = styled.div`
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    width: 38px;
    height: 2px;
    position: absolute;
    left: 0px;
    bottom: 0px;
`;
S.TabPanel = styled.div`
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
    font-family: "Pretendard", "Noto Sans KR";
    text-align: left;
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    line-height: 20px;
    font-weight: 600;
    position: absolute;
    left: 90px;
    top: 104px;
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.RoundTabPanelForm = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 698px;
    left: 198px;
    top: 104px;
`;

S.OnewayTabPanelForm = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 698px;
    left: 198px;
    top: 104px;
    overflow: hidden;
`;

S.MultiTabPanelForm = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 698px;
    left: 198px;
    top: 104px;
    overflow: hidden;
`;

S.DivFlex_1 = styled.div`
    width: 398px;
    height: 66px;
    position: absolute;
    left: calc(50% - 199px);
    top: calc(50% - 56.5px);
`;

S.DivAntFormItemControlInput = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    position: absolute;
    right: 220.75px;
    left: -0.0009765625px;
    bottom: 0px;
    top: 0px;
`;

S.StartButton = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    width: 177.25px;
    height: 26px;
    position: absolute;
    left: calc(50% - 88.62px);
    top: calc(50% - 21px);
`;
S.DivDeparture = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
    line-height: 26px;
    position: absolute;
    left: calc(50% - 14.85px);
    top: 3px;
    width: 29.87px;
    height: 20px;
    ${flexCenterColumn}
`;

S.DivDepartureinput = styled.input`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: center;
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    border: none;
    outline: none;
    width: 177.25px;
    height: 16px;
    position: absolute;
    left: calc(50% - 88.62px);
    top: calc(50% - -5px);
    ${flexCenterColumn}
`;

S.DivDeparture2 = styled.div`
    height: 18px;
    position: absolute;
    right: 11px;
    left: 11px;
    top: -1px;
    overflow: hidden;
`;

S.DivDeparture3 = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    font-size: ${({ theme }) => theme.FONT_SIZE["h8"]};
    line-height: 18px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: absolute;
    left: calc(50% - 27.62px);
    top: 0px;
    width: 56px;
    ${flexCenterColumn};
`;
S.DefArrChangeButton = styled.button`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    width: 43.5px;
    position: absolute;
    left: 177.25px;
    bottom: 0px;
    top: 0px;
`;
S.DefArrChangeSpan = styled.span`
    width: 34px;
    height: 34px;
    position: absolute;
    left: calc(50% - 17px);
    top: calc(50% - 17px);
    overflow: hidden;
`;
S.DefArrChangeImage = styled.div`
    height: 34px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;

S.DefArrChangeImageFill = styled.div`
    width: 34px;
    height: 34px;
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;

S.TabPanelForm2 = styled.div`
    background: #ffffff;
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 508px;
    left: 618px;
    top: 104px;
`;

S.Div_w_full1 = styled.div`
    width: 138px;
    height: 40px;
    position: absolute;
    left: calc(50% - 69px);
    top: calc(50% - 38px);
    & * span {
        width: 40px;
        position: absolute;
        left: calc(50% - 20px);
        bottom: 0px;
        top: 0px;
        overflow: hidden;
    }
    & * image {
        height: 40px;
        position: absolute;
        right: 0px;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }
`;

S.Image_fill = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
`;

S.Icon_person_40_svg = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
`;
S.Icon_person_40 = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
    overflow: visible;
`;
S.TabPanelForm2Div = styled.div`
    width: 100%;
    height: 22px;
    position: absolute;
    left: calc(50% - 19.56px);
    top: calc(50% - -16px);
`;
S.TabPanelForm2DivFont = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: left;
    font-family: "Pretendard", "Noto Sans KR";
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: absolute;
    left: 0px;
    top: 2px;
    width: 100%;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
S.TabPanelForm3 = styled.div`
    background: #ffffff;
    border-radius: 20px;
    border-style: solid;
    border-color: #006516;
    border-width: 2px;
    height: 115px;
    position: absolute;
    right: 318px;
    left: 808px;
    top: 104px;
`;

S.Div_w_full2 = styled.div`
    width: 138px;
    height: 40px;
    position: absolute;
    left: calc(50% - 69px);
    top: calc(50% - 38px);
    & * span {
        width: 40px;
        position: absolute;
        left: calc(50% - 20px);
        bottom: 0px;
        top: 0px;
        overflow: hidden;
    }
    & * image {
        height: 40px;
        position: absolute;
        right: 0px;
        left: 0px;
        top: 0px;
        overflow: hidden;
    }
`;

S.Image_fil2 = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
`;

S.Icon_seat_40_svg = styled.div`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    overflow: hidden;
`;
S.Icon_seat_40 = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0%;
    left: 0%;
    bottom: 0%;
    top: 0%;
    overflow: visible;
`;
S.TabPanelForm3Div = styled.div`
    width: 100%;
    height: 22px;
    position: absolute;
    left: calc(50% - 19.45px);
    top: calc(50% - -16px);
`;
S.TabPanelForm3DivFont = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: left;
    font-family: "Pretendard", "Noto Sans KR";
    font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["regular"]};
    position: absolute;
    left: 0px;
    top: 2px;
    width: 100%;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.AirBanner1 = styled.div`
    width: 1734;
    height: 240px;
    ${flexCenterColumn}
    margin-top: 20px;
`;

S.AirBannerImage = styled.img`
    border-radius: 20px;
`;

S.AirWeekSaleDiv = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 746.37px;

    & * {
        box-sizing: border-box;
    }
`;

S.AirWeekTitleDiv = styled.div`
    width: 100%;
    height: 85px;
    position: relative;
    top: 00px;
    overflow: hidden;
`;

S.AirWeekSaleTitle = styled.div`
    color: ${({ theme }) => theme.PALLETE.fontNatural["100"]};
    text-align: left;
    line-height: 26px;
    font-family: "Noto Sans KR";
    font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
    position: absolute;
    left: 224px;
    top: 15px;
    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.AirWeekSaleListComponent = styled.div`
    background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
    height: 712.37px;
    position: relative;
`;

S.AirWeekSaleList = styled.div`
    width: 100%;
    position: absolute;
    left: calc(50% - 953.5px);
    bottom: 0px;
    top: 0px;
    flex-direction: row;
`;

S.List_Grop = styled.div`
    width: 100%;
    height: 632px;
    position: relative;
    &* {
        box-sizing: border-box;
    }
`;
S.List_Grop_Div = styled.div`
    width: 437px;
    height: 1630px;
    position: relative;
`;

S.List_Grop_Div_Link = styled.div`
    border-radius: 20px;
    height: 440px;
    position: absolute;
    right: 21px;
    left: 20px;
    top: 7px;
`;

S.List_Group_Div_Img = styled.image`
    border-radius: 20px;
    height: 440px;
    position: absolute;
    right: -1px;
    left: 1px;
    top: 0px;
    overflow: hidden;
    object-fit: cover;
`;

S.List_Group_Heading_Div = styled.div`
    width: 200px;
    height: 33px;
    position: absolute;
    right: 21px;
    left: 20px;
    top: 477px;
    overflow: hidden;
`;

S.List_Group_Heading_Div2 = styled.div`
    width: 200px;
    height: 33px;
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    overflow: hidden;
`;

S.List_Group_Heading_Font = styled.p`
    color: #000000;
    text-align: left;
    font-family: "Inter-Bold", sans-serif;
    font-size: 24.2734375px;
    font-weight: 700;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 252.15px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

S.List_Group_Heading_Img = styled.image`
    width: 20px;
    height: 14px;
    position: absolute;
    left: 93px;
    top: 9px;
    overflow: hidden;
    object-fit: cover;
`;

S.List_Group_Price_Date = styled.div`
    width: 397px;
    height: 50px;
    position: relative;
    overflow: hidden;
`;
S.List_Group_Price_Date_Font = styled.p`
    color: #111111;
    text-align: left;
    font-family: "NotoSansKr-Medium", sans-serif;
    font-size: 17px;
    line-height: 27px;
    font-weight: 500;
    position: absolute;
    left: 0px;
    top: -4px;
    width: 375.61px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;
export default S;
