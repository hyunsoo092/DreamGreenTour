import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

const S = {};

S.Wrapper = styled.div`
  ${flexCenterColumn}
  height: 100vh;
  background-color: ${({ theme }) => theme.PALLETE.form["basic"]};
`;

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  min-height: 100vh;
  padding: 0 2.6rem;
  background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
`;

S.TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  .icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

S.Title = styled.div`
  height: 5.2rem;
  text-align: left;

  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
`;

S.Approve = styled.span`
  padding-left: 8px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
`;

S.SubTitle = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE["h3"]};
`;

S.RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .gender:hover {
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  }
`;

S.RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

S.Radio = styled.input.attrs({ type: "radio" })`
  width: 24px;
  height: 24px;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

S.RadioText = styled.span`
  margin-top: 1rem;
  padding-left: 5px;
`;

S.Form = styled.form`
  margin-bottom: 1rem;
`;

S.NameInput = styled.input`
  width: 80%;
  border: none;
  padding-left: 15px;
  border-radius: 10px;
  min-height: 3rem;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  margin-right: 15px;
`;

S.ManBtn = styled.button.attrs({ type: "button" })`
  width: 8.9%;
  border: none;
  text-align: center;
  min-height: 3rem;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.PALLETE.fontNatural[20]
      : theme.PALLETE.primary["mainGreen100"]};
  /* color: ${({ theme }) => theme.PALLETE.fontNatural[20]}; */
  cursor: pointer;

  &:focus {
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  }
`;

S.WomanBtn = styled.button.attrs({ type: "button" })`
  width: 8.9%;
  border: none;
  text-align: center;
  min-height: 3rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  border-right: 1px solid
    ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  border-bottom: 1px solid
    ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  background-color: ${({ theme }) => theme.PALLETE.backgroundColor["white"]};
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.PALLETE.fontNatural[20]
      : theme.PALLETE.primary["mainGreen100"]};
  /* color: ${({ theme }) => theme.PALLETE.fontNatural[20]}; */
  cursor: pointer;
  &:focus {
    color: ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  }
`;

S.Input = styled.input`
  position: absolute;

  width: 44.5%;
  border: none;
  padding-left: 15px;
  border-radius: 10px;
  min-height: 3rem;
  border: 1px solid ${({ theme }) => theme.PALLETE.primary["mainGreen100"]};
  font-size: ${({ theme }) => theme.FONT_SIZE["h6"]};
  margin-top: 1rem;
`;

S.InputWrapper = styled.div`
  margin-bottom: 2.6rem;
`;

S.InputBtn = styled.button.attrs({ type: "button" })`
  position: relative;
  top: 30px;
  right: -580px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  cursor: pointer;
`;
S.ApproveBtn = styled.button.attrs({ type: "button" })`
  position: relative;
  top: 30px;
  right: -605px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT["bold"]};
  cursor: pointer;
`;
export default S;
