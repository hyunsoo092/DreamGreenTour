import styled from "styled-components";
import {
  flexCenterColumn,
  flexCenterRow,
  flexEvenlyCenter,
  flexSpaceAroundCenter,
} from "../../global/common";

const S = {};

S.Wrapper = styled.div`
  ${flexCenterColumn}
`;

S.Logo = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE["h2"]};
  color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
`;

S.LogoWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  .icon {
    color: #bec4c9;
    font-size: 24px;
    padding: 4px;
    margin-left: -45px;
  }
`;

S.LoginWrapper = styled.div`
  margin-left: auto;
  height: 48px;

  .icon {
    height: 40px;
  }
`;

S.Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.List = styled.div`
  float: right;
  margin-top: 12px;
`;

S.Login = styled.div`
  float: left;
`;
S.Register = styled.div`
  float: left;
  margin: 0 14px 0 14px;
`;

S.Input = styled.input`
  width: 334px;
  height: 40px;
  margin-left: 40px;
  border-radius: 45px;
  text-align: start;
  padding-left: 20px;
`;

S.MenuWrapper = styled.div`
  width: 700px;
  border: 1px solid lightgray;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
  ${flexSpaceAroundCenter}
`;

S.Menu = styled.div`
  width: 140px;
  height: 50px;
  ${flexEvenlyCenter}
  margin-left: -30px;
  border-right: 1px solid lightgray;
`;

S.Home = styled.div`
  
`

export default S;
