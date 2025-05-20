import { styled } from "styled-components";
import * as I from "../../../../assets/Icons";

export const HeaderLayout = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  background-color: #ffffff;
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60%;
`;

export const BackButton = styled(I.Back)`
  width: 9%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
`;

