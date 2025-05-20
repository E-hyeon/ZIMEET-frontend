import { styled } from "styled-components";
import * as I from "../../../assets/Icons";
import Certification from '../../../assets/icon/Meeting22/certification.svg?react';

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
  width: 25%;
  padding-left: 3%;
`;

export const BackButton = styled(I.Back)`
  width: 11%;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-left: 1%;
`;

export const TeamNameContainer = styled.div`
  display: flex;
  height:100%;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3%;
`;

export const CertificationIcon = styled(Certification)`
  height:100%;
  width: 15%;
  margin-right: 4%;
  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    height:56%;
    margin-right: 0%;
    }
  }
`;

export const TeamName = styled.h2`
  font-size: 15px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #000000;
  font-family: 'Pretendard';
  white-space: nowrap;
`;
