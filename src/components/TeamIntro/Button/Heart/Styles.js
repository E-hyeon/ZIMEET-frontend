import styled from 'styled-components';
import hiIcon from '../../../../assets/icon/TeamInfo/HiIcon.svg?react';

export const HeartButton = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #EA4335;
  width: 100%;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: #EA4335;
  }

  &:active {
    background-color: #EA4335;
  }
`;

export const HeartLayOut = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 85%;
  height: 6.5%;
  margin-top: 3%;
  margin-bottom: 5%;
  position: absolute;  
  bottom: 11%;
  left: 7.5%;
`;

export const Hi = styled(hiIcon)`
  width: 8%;
  height: 100%;
  margin-right: 1%;
`;

export const SendText = styled.span`
  color: white; 
`;