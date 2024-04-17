import React from 'react';
import S from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ThemeComponent = ({themeTrip,getTheme}) => {
    const {title} = themeTrip;
    const {content} = themeTrip;
    const {id}=themeTrip;
  return (
    <S.ThemeImageWrapper>
      <Link to={`/theme/recommend/${id}`}>
            {/* <S.li> */}
        <S.ThemeImageDiv >    
            <S.ThemeImage src={process.env.PUBLIC_URL + '/img/picture/Guadalupe.jpeg'}></S.ThemeImage>
        </S.ThemeImageDiv>
      
            <div className='wrapper'>
              <button>
                <FontAwesomeIcon icon={faHeart}/>
              </button>
            </div>
            <div className='wrapper'>
            {title}
            {content}
            </div>
            {/* </S.li> */}
        </Link>
    </S.ThemeImageWrapper>
  );
};

export default ThemeComponent;