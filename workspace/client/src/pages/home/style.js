import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../global/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const S = {};

// 1번 
S.Section = styled.div`
 overflow-x: hidden ;
  width: 100vw;
  height: auto;
`

S.ImageWrapper = styled.div`
    width: 100vw;
    height: 50vh;
    background-image: url(${process.env.PUBLIC_URL}/background.png);
    background-repeat: no-repeat;
    background-size: cover;   
`;

S.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  margin: 20px 50px 20px 0  ;
  width:  20%;
  height: 90%;
  background-color: green;
  
`

S.LetterWrapper = styled.div`
    font-size: ${theme.FONT_SIZE.h4};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    line-height: 40px;
    width: 100%;
    height: 20%;
  `

S.ListWrapper = styled.div`
    width: 100%;
    height: 20%;  
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid black;
   
    button {
        font-size: ${theme.FONT_SIZE.h6};
        font-weight: ${theme.FONT_WEIGHT.regular};
        font-family: ${theme.FONT_FAMILY.body};
        height: 70%;
        margin: 20px 0 0 0;
        background-color: transparent;
        cursor: pointer;
      }
  `

  S.Show = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 8px;
    margin: 15px 0 15px 0 ;
    button {
      font-size: ${theme.FONT_SIZE.h7};
      font-weight: ${theme.FONT_WEIGHT.regular};
      font-family: ${theme.FONT_FAMILY.body};
      
    
        height: 90%;
        width: 90%;
        margin: 0 auto;
        cursor: pointer;
    }
  `

  S.ButtonWrapper = styled.div`
    width: 100%;
    height: 20%;
    button {
      font-size: ${theme.FONT_SIZE.h6};
      font-weight: ${theme.FONT_WEIGHT.regular};
      font-family: ${theme.FONT_FAMILY.body};
    
      width: 90%;
      height: 90%;
      margin-left: 14px;
      border-radius: 8px;
      background-color: #333333;
      color: white;
      cursor: pointer;
    }
  `


   // 2번 

  S.Title1 = styled.div`
     
      .title1 {
      margin-top: 100px;
      margin-bottom: 20px;
      margin-left: 200px;
      font-size : 12px;
      border: 2px solid #F06C5E;
      border-radius: 50px / 40px;
      padding: 10px;
      color: #F06C5E;
      width: 15%; 
      } 

      .title2 {
      font-size: ${theme.FONT_SIZE.h3};
      font-weight: ${theme.FONT_WEIGHT.bold};
      font-family: ${theme.FONT_FAMILY.heading};
      margin-left: 200px;
      }
   `
  
  S.region = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 50vh;
    margin: 60px auto;
  `
  S.Circle = styled.div`
   position: relative;
   width: 20%;
   height: 30vh;
   border-radius: 50%;
   overflow: hidden;

  `
  S.Image1 = styled.img`
   width: 100%;
   height: 100%;
   background-repeat: no-repeat;
   background-size: cover; 
   cursor: pointer;
  `

  S.Text = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: ${theme.FONT_SIZE.h3};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    display: flex; 
    justify-content: center; /* 가로 중앙 정렬 */
    align-items: center; /* 세로 중앙 정렬 */
    cursor: pointer;
  `

// 3번 
  S.top = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    width: 60%;
    height: auto;
    margin-bottom: 50px;

    .num1 {
      margin-bottom: 50px;
      font-size : 12px;
      border: 2px solid #F06C5E;
      border-radius: 50px / 40px;
      padding: 10px;
      color: #F06C5E;
      margin-bottom: 20px;
       }
        
    .num2 {
    font-size: ${theme.FONT_SIZE.h3};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    }
  `

  S.country = styled.div`
    width: 40vw;
    height: 70px ;
    margin: 0 auto;
    
    
    
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
    
    button {
      background-color: transparent;
      cursor: pointer;
    }
    
    li {
      font-size: ${theme.FONT_SIZE.h7};
      font-weight: ${theme.FONT_WEIGHT.bold};
      font-family: ${theme.FONT_FAMILY.heading};
      margin-bottom: 20px;
     
    }
  `

S.package = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 150px;
  width: 70vw;
  height: auto;
  gap: 40px;
`;

S.middle = styled.div`
  width: 12vw;
  cursor: pointer;
  
    
  margin: 0 auto;
  .big  {   
     position: relative;
     left: 20px;
     font-size: ${theme.FONT_SIZE.h6};
     font-weight: ${theme.FONT_WEIGHT.bold};
     font-family: ${theme.FONT_FAMILY.heading};
     padding: 7px;
    }
  
   .small {
    position: relative;
    left: 20px;
    font-size: ${theme.FONT_SIZE.h9};
    font-weight: ${theme.FONT_WEIGHT.bold};
    font-family: ${theme.FONT_FAMILY.heading};
    padding: 7px;
   }

`
S.block = styled.div`
  position: relative;
  display: inline-block;
`

S.Image2 = styled.img`
  display: block;
  width: 240px;
  height: 180px;
  border-radius: 8%;
  
`;


S.icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;
  
  button {
    cursor: pointer;
  }
  `



// 4번 

 S.imagine = styled.h4`
   margin: 0 auto;
   margin-top: 30px;
   align-items: center;
   position: relative;
   left: 10%;
   color: grey;
   font-size: ${theme.FONT_SIZE.h4};
   font-weight: ${theme.FONT_WEIGHT.light};
   font-family: ${theme.FONT_FAMILY.heading};
`

S.keyword = styled.div`
  display: flex;
  position: relative;
  left: 10%;
  font-size: 32px;
  margin-top: 20px;
  gap: 20px;
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};

  .check1 {
    color: red;
    background-color: transparent;
    font-size: 32px;
    border-bottom: 2px solid red;
  }
  .check2 {
    color: red;
    background-color: transparent;
    font-size: 32px;
    border-bottom: 2px solid red;
  }
  span {
    margin-top: 10px;
  }
`

S.plays = styled.div`
  width: 70vw;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 60px;  
`

S.play = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;
 
  
  .big {
  font-size: ${theme.FONT_SIZE.h6};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  position: relative;
  right: 15%;
  
  }
  .small {
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  position: relative;
  right: 15%;
  }
`
S.Image3 = styled.img`
  width: 17vw;
  height: 35vh;
  border-radius: 10%;
  position: relative;
  right: 16%;
`

S.Grids = styled.div`
  width: 70vw;
  height: auto;
  margin: 0 auto;
  margin-top: 150px;
  display: grid;

  grid-template-areas:
    "1 2 3 4"
    "5 6 7 8";
  grid-gap: 20px;

#1 {

  grid-area: 1;
}

#2 {
  grid-area: 2;
 
}


#3 {
  grid-area: 3;
}

#4 {
  grid-area: 4;
}

#5 {
  grid-area: 5;
}

#6 {
  grid-area: 6;
}

#7 {
  grid-area: 7;
}

#8 {
  grid-area: 8;
}
`

S.Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .theme {
      font-size : 12px;
      border: 2px solid #F06C5E;
      border-radius: 50px / 40px;
      padding: 10px;
      color: #F06C5E;
      width: 75%;
  }

  .special {
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  }

  .price {
   font-size: ${theme.FONT_SIZE.h6};
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-family: ${theme.FONT_FAMILY.heading};
  }

  button {
    background: transparent;
    color: grey;
    font-size: ${theme.FONT_SIZE.h4};
    margin-top: 40px;
    position: relative;
    border-bottom:5px solid grey;
    width: fit-content; 
    }
`

S.Image4 = styled.img`
  width: 15vw;
  height: 30vh;
  border-radius: 10%;
`
 
S.end = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .last { 
  font-size: ${theme.FONT_SIZE.h3};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-family: ${theme.FONT_FAMILY.heading};
  margin-bottom: 30px;
  }
`
S.icons = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 10px;
  border: 1px solid #e7e7e7;

  p {
    line-height: 1.5; /* 예시로 줄 간격을 1.5배로 설정 */
  }
`

export default S;