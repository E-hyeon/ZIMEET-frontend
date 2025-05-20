import styled from 'styled-components';
import hiIcon from '../../../../../assets/icon/TeamInfo/HiIcon.svg?react';

export const Modallayout = styled.div`
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #ffffff;
  padding: 4%;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 84%; 
  height: auto;
`;

export const ModalTitle = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin: 2% 0 5%;
`;

export const ModalText = styled.p`
  font-size: 12px;
  color: #9C9C9C;
  white-space: pre-line;
  word-wrap: break-word;
  text-align: center;
  margin-bottom: 8%;
  line-height: 1.5;
`;

export const HighlightText = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;

export const TicketCount = styled.div`
  width: 38%;
  height: 30%; 
  font-size: 10px;
  font-weight: 700;
  line-height: 19.5px;
  color: #EA4335;
  font-weight: bold;
  background-color: #F2F2F2;
  padding: 2%;
  border-radius: 20px;
  line-height: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 5%; 
`;

export const ButtonBox = styled.div`
  display: flex;
  height: 5vh;
`;

export const CancelButton = styled.button`
  background: #F2F2F2;
  color: #A6A6A6;
  border: none;
  width: 29%;
  height: 100%;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 3%;
`;

export const ConfirmButton = styled.button`
  width: 72%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background: #EA4335;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

export const Hi = styled(hiIcon)`
  width: 13%;
  height: 60%;
  margin: 0 1% 0.5% 0;
`;

export const Text = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: white;
`;