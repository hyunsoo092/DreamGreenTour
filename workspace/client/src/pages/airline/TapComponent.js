import React, { useState } from "react";
import S from "./style";

const TapComponent = () => {
    const [selectedTab, setSelectedTab] = useState('RoundTrip');

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };
   
    const renderContent = () => {
        return selectedTab === "RoundTrip" ? (
            <S.RoundTabPanelForm  selectedTab={selectedTab} handleTabClick={handleTabClick}  />
        ) : selectedTab === "Oneway" ? (
            <S.OnewayTabPanelForm />
        ) : selectedTab === "Multiple" ? (
            <S.MultiTabPanelForm />
        ) : (
            <S.RoundTabPanelForm />
        );
    };

    return (
        <S.SearchDiv>
            <S.Tablist>
                <S.DivAntTabsTab1>
                    <S.RoundTripTab onClick={() => handleTabClick("RoundTrip")}>
                        왕복
                    </S.RoundTripTab>
                </S.DivAntTabsTab1>

                <S.DivAntTabsTab2>
                    <S.OnewayTab onClick={() => handleTabClick("Oneway")}>
                        편도
                    </S.OnewayTab>
                </S.DivAntTabsTab2>

                <S.DivAntTabsTab3>
                    <S.MultipleTripTab
                        onClick={() => handleTabClick("Multiple")}
                    >
                        다구간
                    </S.MultipleTripTab>
                </S.DivAntTabsTab3>

                <S.TabPanel></S.TabPanel>
            </S.Tablist>

            <S.TabPanel>항공권 검색</S.TabPanel>
            <S.RoundTabPanelForm>
                <S.DivFlex_1></S.DivFlex_1>
            </S.RoundTabPanelForm>

            <S.TabPanelForm2>
                <S.Div_w_full1>
                    <span>
                        <image>
                            <S.Image_fill></S.Image_fill>
                        </image>
                        <S.Icon_person_40_svg>
                            <S.Icon_person_40
                                src="/img/icon/person.png"
                            />
                        </S.Icon_person_40_svg>
                    </span>
                </S.Div_w_full1>
                <S.TabPanelForm2Div>
                    <S.TabPanelForm2DivFont>성인 1</S.TabPanelForm2DivFont>
                </S.TabPanelForm2Div>
            </S.TabPanelForm2>

            <S.TabPanelForm3>
                <S.Div_w_full2>
                    <span>
                        <image>
                            <S.Image_fill></S.Image_fill>
                        </image>
                        <S.Icon_seat_40_svg>
                            <S.Icon_seat_40
                                src="/img/icon/seat.png"
                            />
                        </S.Icon_seat_40_svg>
                    </span>
                </S.Div_w_full2>
                <S.TabPanelForm3Div>
                    <S.TabPanelForm3DivFont>일반석</S.TabPanelForm3DivFont>
                </S.TabPanelForm3Div>
            </S.TabPanelForm3>

            {renderContent()}
        </S.SearchDiv>
    );
};

export default TapComponent;
