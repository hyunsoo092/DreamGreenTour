import React from "react";
import S from "./style";

const data = [
    {
        id: 1,
        departure_img: "/img/picture/departure_jeju.png",
        airline: "대한항공",
        airline_icon: "/img/icon/KE.png",
        airline_price: "김포-> 제주 항공권 39,000원",
        airline_def_day: "5월 5일 출발",
        airline_hashtag: ["대한항공", "제주"],
    },
    {
        id: 2,
        departure_img: "/img/picture/departure_jeju2.png",
        airline: "제주항공",
        airline_icon: "/public/icon/7C.png",
        airline_price: "김포-> 제주 항공권 29,900원",
        airline_def_day: "5월 12일 출발",
        airline_hashtag: ["대한항공", "제주"],
    },
    {
        id: 3,
        departure_img: "/public/picture/departure_busan.png",
        airline: "아시아나",
        airline_icon: "/public/icon/OZ.png",
        airline_price: "김포-> 부산 항공권 39,900원",
        airline_def_day: "5월 8일 출발",
        airline_hashtag: ["아시아나", "부산"],
    },
];

const AirWeekSaleComponent = () => {
    return (
        <S.List_Grop className="w-3/4 m-auto">
            {data.map((datas) => (
                <S.List_Grop_Div className="mt-20" style={{ display: "flex", flexDirection: "column" }}>
                    <S.List_Grop_Div_Link  key={datas.id} >
                        <S.List_Group_Div_Img
                            src={datas.departure_img}
                            
                        />
                        <S.List_Group_Heading_Div>
                        <S.List_Group_Heading_Div2>
                            <S.List_Group_Heading_Font>
                                {datas.airline}
                            </S.List_Group_Heading_Font>
                            <S.List_Group_Heading_Img src={datas.airline_icon} alt={datas.airline} />
                        </S.List_Group_Heading_Div2>
                        </S.List_Group_Heading_Div>
                        <S.List_Group_Price_Date>
                            <S.List_Group_Price_Date_Font>
                                {datas.airline_price}
                            </S.List_Group_Price_Date_Font>
                            <S.List_Group_Price_Date_Font>
                                {datas.airline_def_day}
                            </S.List_Group_Price_Date_Font>
                        </S.List_Group_Price_Date>
                        <div>{datas.airline_hashtag.join(", ")}</div>
                    </S.List_Grop_Div_Link>
                </S.List_Grop_Div>
            ))}
        </S.List_Grop>
    );
};

export default AirWeekSaleComponent;
