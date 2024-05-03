import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

const S = {};

S.Head = styled.div``;

S.Wrapper = styled.div`
  ${flexCenterColumn}
  float: left;
`;

S.Title = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.FONT_SIZE["h5"]};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
`;

S.LocationWrapper = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  .icon {
    width: 36px;
    height: 36px;
    cursor: pointer;
  }
`;

S.LocationBtn = styled.button.attrs({ type: "button" })`
  border-radius: 100%;
  width: 260px;
  height: 260px;
  cursor: pointer;
`;

export default S;
