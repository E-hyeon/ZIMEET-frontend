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
`;

export const BackContainer = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  height: 100%;
  padding-left: 3%;
`;
export const BackButton = styled(I.Back)`
  width: 11%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height: 55%;
  }
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-left: 1%;
`;

export const DeleteButton = styled.button`
  display: flex;
  height:100%;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3%;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`

`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 10px;
  border-radius: 5px;
  padding: 10px;
  width: 30%
`;

export const DropdownItem = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  background-color:  #f5f5f5;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;