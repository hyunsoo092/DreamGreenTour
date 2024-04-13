import React, { useState } from 'react';
import S from './style';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; // 빈 하트
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'; // 속이 찬 하트
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen , faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Home = () => {

// 맨 위 박스 
  const [contentType, setContentType] = useState('package');

  let contentToShow;

  if (contentType === 'package') {
    contentToShow = (
      <>
        <button>어디로 떠나세요?</button>
        <button>출발지 전체</button>
        <button>여행시작일 선택</button>
      </>
    );
  } else if (contentType === 'flight') {
    contentToShow = (
      <>
        <button>룰랄라 3</button>
        <button>룰랄라 3</button>
        <button>룰랄라 3</button>
      </> 
    );
  } else if (contentType === 'hotel') {
    contentToShow = (
      <>
        <button>룰랄라 2</button>
        <button>룰랄라 2</button>
        <button>룰랄라 2</button>
      </>
    );
  }

// 서울 , 인천 사진 클릭 시 
const navigate = useNavigate();

const handleClick = (text) => {
  let path = '';
  switch (text) {
    case '서울':
      path = '/Airline';
      break;
    case '강원도':
      path = '/Hotel';
      break;
    case '전라도':
      path = '/jeolla';
      break;
    case '경상도':
      path = '/gyeongsang';
      break;
    case '경기도':
      path = '/gyeongsang';
      break;
    case '충청도':
      path = '/gyeongsang';
      break;
    case '제주도':
      path = '/gyeongsang';
      break;
    default:
      break;
  }
  if (path !== '') {
    navigate(path);
  }
};

// 3. 이번주에 가장 사랑받은 여행

// 3-1 아이콘 하트 누르기 



// 3-2 각 테마 
const [TravelType, setTravelType] = useState('seoul');

let travelToShow;

if (TravelType === 'seoul') {
  travelToShow = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
                  <button>
                     <FontAwesomeIcon icon={farHeart} />
                </button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
            <button>
                 <FontAwesomeIcon icon={farHeart} />
                </button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
                  <button>
                 <FontAwesomeIcon icon={farHeart} />
                </button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
          
                <button>
                 <FontAwesomeIcon icon={farHeart} />
                </button>
           
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen} className="custom-icon"/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen} className="custom-icon"/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>

          <S.middle>
            <S.block>
              <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <S.icon>
                <button><FontAwesomeIcon icon={faPen} /></button>
              </S.icon>
            </S.block>

            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>

          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
            
        
          
    </>
  );
} 

else if (TravelType === 'keong') {
  travelToShow = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>안녕</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
    </> 
  );
} 

else if (TravelType === 'chung') {
  travelToShow = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>반가워</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
    </>
  );
}

else if (TravelType === 'jeon') {
  travelToShow  = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>집가고 싶다</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
    </> 
  );
}

else if (TravelType === 'kyeong') {
  travelToShow  = (
    <>
       <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>음핫핫</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
    </> 
  );
}

else if (TravelType === 'jeju') {
  travelToShow  = (
    <>
      <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
          <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
    </> 
  );
}

else if (TravelType === 'kangwon') {
  travelToShow  = (
    <>
      <S.middle>
            <S.block>
            <S.Image2 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
            <S.icon>
              <button><FontAwesomeIcon icon={faPen}/></button>
            </S.icon>
            </S.block>
            <p className='small'>오사카</p>
            <p className='big'>[일본]오카사 유니버셜 스튜디오 재</p>
            <p className='big'>팬 입장권 티켓 USJ</p>
            <p className='big'>76,900원</p>
            <p className='small'>2024년 2월 4일부터 사용가능</p>
            <p className='small'>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
              (31)
            </p>
            <p className='small'>구매 5천↑ 조회 60만↑</p>
          </S.middle>
    </> 
  );
}


  return (
    <div>
      <S.Section>
        <S.ImageWrapper>
          <S.Wrapper>
            <S.LetterWrapper>
              고객님,<br/> 
              어떤 여행을 꿈꾸시나요?
            </S.LetterWrapper>
            <S.ListWrapper>
             <button onClick={() => setContentType('package')}>패키지</button>
             <button onClick={() => setContentType('flight')}>항공</button>
             <button onClick={() => setContentType('hotel')}>호텔</button>
            </S.ListWrapper>
            <S.Show>
              {contentToShow}
            </S.Show>
            <S.ButtonWrapper>
              <button>숙소 검색</button>
            </S.ButtonWrapper>
          </S.Wrapper>
        </S.ImageWrapper>
        
        <S.Title1>
            <p className='title1'>DREAMGREENTOUR RECOMMEND</p>
            <p className='title2'>어디로 여행을 떠나시나요?</p>
        </S.Title1> 

        <S.region>
    
        <S.Circle onClick={() => handleClick('서울')}>
          <S.Image1 src={`${process.env.PUBLIC_URL}/travel/seoul.png`} alt="서울"/>
          <S.Text>서울</S.Text>
        </S.Circle>
        <S.Circle onClick={() => handleClick('강원도')}>
          <S.Image1 src={`${process.env.PUBLIC_URL}/travel/kang.png`} alt="강원도"/>
          <S.Text>강원도</S.Text>
        </S.Circle>
        <S.Circle onClick={() => handleClick('전라도')}>
          <S.Image1 src={`${process.env.PUBLIC_URL}/travel/jeonla.png`} alt="전라도"/>
          <S.Text>전라도</S.Text>
        </S.Circle>
        <S.Circle onClick={() => handleClick('경상도')}>
          <S.Image1 src={`${process.env.PUBLIC_URL}/travel/keonsang.png`} alt="경상도"/>
          <S.Text>경상도</S.Text>
        </S.Circle>

        {/* <S.Circle onClick={() => handleClick('경기도')}>
          <S.Image1 src={`${process.env.PUBLIC_URL}/travel/keonsang.png`} alt="경기도"/>
          <S.Text>경기도</S.Text>
        </S.Circle>
        <S.Circle onClick={() => handleClick('충청도')}>
          <S.Image1 src={`${process.env.PUBLIC_URL}/travel/keonsang.png`} alt="충청도"/>
          <S.Text>충청도</S.Text>
        </S.Circle>
        <S.Circle onClick={() => handleClick('제주도')}>
          <S.Image1 src={`${process.env.PUBLIC_URL}/travel/jeju.png`} alt="제주도"/>
          <S.Text>제주도</S.Text>
        </S.Circle> */}
     
        </S.region>

        <S.top>
          <p className='num1'>WEEKLY BEST DEALS</p>
          <p className='num2'>이번 주에 가장</p>
          <p className='num2'>사랑받은 여행이에요</p>
        </S.top>

        <S.country>
            <ul>
              <li><button onClick={() => setTravelType('seoul')}>서울</button></li>
              <li><button onClick={() => setTravelType('keong')}>경기도</button></li>
              <li><button onClick={() => setTravelType('chung')}>충청도</button></li>
              <li><button onClick={() => setTravelType('jeon')}>전라도</button></li>
              <li><button onClick={() => setTravelType('kyeong')}>경상도</button></li>
              <li><button onClick={() => setTravelType('jeju')}>제주도</button></li>
              <li><button onClick={() => setTravelType('kangwon')}>강원도</button></li>
            </ul>
        </S.country>

        <S.package>
         {travelToShow}
        </S.package>


          <S.imagine>상상만 하던,내 마음속의 여행,</S.imagine>
          <S.imagine>키워드로 검색해 보세요.</S.imagine>

        <S.keyword>
          <button className='check1'>#사랑하는 사람과</button>
          <button className='check2'>#풍경보러</button> 
          <span>떠나고 싶어요</span>
        </S.keyword>

          <S.plays>
             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='small'>수상액티비티</p>
              <p className='big'>[괌]돌핀크루즈 예약(돌고래투어 / 슈퍼</p>
              <p className='big'>패스카드)</p>
              <p className='big'>65,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='small'>수상액티비티</p>
              <p className='big'>[괌]돌핀크루즈 예약(돌고래투어 / 슈퍼</p>
              <p className='big'>패스카드)</p>
              <p className='big'>65,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='small'>수상액티비티</p>
              <p className='big'>[괌]돌핀크루즈 예약(돌고래투어 / 슈퍼</p>
              <p className='big'>패스카드)</p>
              <p className='big'>65,000원</p>
             </S.play>

             <S.play>
              <S.Image3 src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='small'>수상액티비티</p>
              <p className='big'>[괌]돌핀크루즈 예약(돌고래투어 / 슈퍼</p>
              <p className='big'>패스카드)</p>
              <p className='big'>65,000원</p>
             </S.play>
          </S.plays>

          <S.Grids>
           
           <S.Grid>
             <p className='theme'>GREENDREAMTOUR THEME</p>
             <p className='special'>시드니 차량투어</p>  
             <p className='special'>예약하면, 워킹투어가</p>   
             <p className='special'>무료</p>   
             <button>MORE</button>
           </S.Grid>

            <S.Grid>
              <S.Image4 id='2' src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
              <p className='price'>권 티켓</p>
              <p className='price'>73,900원</p>
            </S.Grid>
          
            <S.Grid>
              <S.Image4 id='3' src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
              <p className='price'>권 티켓</p>
              <p className='price'>73,900원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='4' src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
              <p className='price'>권 티켓</p>
              <p className='price'>73,900원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='5' src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
              <p className='price'>권 티켓</p>
              <p className='price'>73,900원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='6' src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
              <p className='price'>권 티켓</p>
              <p className='price'>73,900원</p>
            </S.Grid>
            <S.Grid>
              <S.Image4 id='7' src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
              <p className='price'>권 티켓</p>
              <p className='price'>73,900원</p>
            </S.Grid>

            <S.Grid>
              <S.Image4 id='8' src={`${process.env.PUBLIC_URL}/travel.png`} alt="Description"/>
              <p className='price'>[싱가포르]유니버셜 스튜디오 입장</p>
              <p className='price'>권 티켓</p>
              <p className='price'>73,900원</p>
            </S.Grid>
          </S.Grids>
       

          <S.end>
          <p className='last'>투어/입장권 예약상담</p>
              <S.icons>
                <FontAwesomeIcon icon={faPen}/>
                <p>투어/입장권 상품 문의는 투어/입장권 상품페이지 내 "상품문의" 게시판을 이용 부탁합니다. <br />
                투어/입장권 일반 문의는 "고객문의" 게시판을 이용 부탁합니다.<br />
                투어/입장권 예약, 취소, 결제, 환불은 "자주 찾는 질문" 게시판에서 확인 부탁합니다.</p>
              </S.icons>
          </S.end>

          <S.end>
          <p className='last'>투어/입장권 판매회원 가입</p>
              <S.icons>
                <FontAwesomeIcon icon={faPen}/>
                <p>투어/입장권 상품 판매는 "판매회원 가입 안내" 페이지에서 별도의 회원가입 후 가능합니다. <br />
                  판매회원 가입 문의 (국내)hhj1217@hanatour.com <br />
                  (해외)jinie27@hanatour.com</p>
              </S.icons>
          </S.end>

      </S.Section>
      
    </div>
  );
};

export default Home;
