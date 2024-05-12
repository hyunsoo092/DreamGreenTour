import React, { useEffect, useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const Jeonla = () => {
  const [heart1, setHeart1] = useState(false);
  const [heart2, setHeart2] = useState(false);
  const [heart3, setHeart3] = useState(false);
  const [heart4, setHeart4] = useState(false);
  const handleHeart1 = () => {
    setHeart1(!heart1);
  };
  const handleHeart2 = () => {
    setHeart2(!heart2);
  };
  const handleHeart3 = () => {
    setHeart3(!heart3);
  };
  const handleHeart4 = () => {
    setHeart4(!heart4);
  };

  const [Jeonla, setJeonla] = useState([]);

  useEffect(() => {
    const JeonlaData = async () => {
      const response = await fetch(
        "https://port-0-dreamgreentour-back-rm6l2llw1nx5nw.sel5.cloudtype.app/review/Jeonla",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setJeonla(data.map((location) => location));
    };

    JeonlaData();
  }, []);

  return (
    <S.Wrapper>
      <S.ReviewLine1>
        <S.Review>
          <S.ReviewTitle>
            {Jeonla.length > 0 && Jeonla[0].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart1} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart1 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview1.jpg`}
          />
          <S.ReviewText>{Jeonla.length > 0 && Jeonla[0].text}</S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            {Jeonla.length > 0 && Jeonla[1].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart2} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart2 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview2.jpeg`}
          />
          <S.ReviewText>{Jeonla.length > 0 && Jeonla[1].text}</S.ReviewText>
        </S.Review>
      </S.ReviewLine1>
      <S.ReviewLine2>
        <S.Review>
          <S.ReviewTitle>
            {Jeonla.length > 0 && Jeonla[2].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart3} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart3 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview3.jpg`}
          />
          <S.ReviewText>{Jeonla.length > 0 && Jeonla[2].text}</S.ReviewText>
        </S.Review>
        <S.Review>
          <S.ReviewTitle>
            {Jeonla.length > 0 && Jeonla[3].place}
            <S.HeartWrapper>
              <S.HiddenCheckBox onChange={handleHeart4} />
              <S.Heart>
                <FontAwesomeIcon
                  icon={heart4 ? faSolidHeart : faRegularHeart}
                  className="icon"
                />
              </S.Heart>
            </S.HeartWrapper>
          </S.ReviewTitle>
          <S.ReviewImg
            src={`${process.env.PUBLIC_URL}/review/JeonlaReview4.jpg`}
          />
          <S.ReviewText>{Jeonla.length > 0 && Jeonla[3].text}</S.ReviewText>
        </S.Review>
      </S.ReviewLine2>
    </S.Wrapper>
  );
};

export default Jeonla;
