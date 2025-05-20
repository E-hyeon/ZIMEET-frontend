import styled from 'styled-components';
import Certification from '../../../assets/icon/Meeting22/certification.svg?react';

export const TeamLayOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;  
  width: 46%;
  height: 30%;
  border-radius: 10px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  margin: 1%;
  box-sizing: border-box;
  padding: 1% 0 1% 0;

  img {
    width: 60%;
  }
`;

export const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 28%;
  margin: 6% 2% 3% 0;
`;

export const MemberItem1 = styled.div`
height: 100%;
align-items: center;
justify-content: center;
position: relative;
display: flex;
aspect-ratio:1;
background-color: rgba(234, 67, 53, 0.08); 
font-size: 16px;
margin-right: -4%;
border-radius: 50%;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:28%;
  width: 100%;
  margin-bottom: 3%;
  box-sizing: border-box;
`;

export const TeamNameBox = styled.div`
  display: flex;
  height: 70%;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 13px;
  font-weight: 700;
  font-family: 'Pretendard';
`;

export const CertificationIcon = styled(Certification)`
  width:18%;
  height:100%;
  margin-right: 3%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    width: 7%;
    height:60%;
    margin-right: 1%;
  }}
`;

export const MajorBox = styled.div`
display: flex;
height: 50%;
width: 100%;
align-items: center;
justify-content: center;
font-size: 12px;
font-weight: 400;
line-height: 1px;
`;

export const MajorDisplay = styled.div`
  display: flex;
  justify-contents: center;
  font-size: 12px;
  font-weight: 300;
  line-height: 30px;
  word-spacing: 1%;
  color: #0;
  line-height: 16px;
  font-family: 'Pretendard';
`;

export const MemberInfo = styled.div`
  display: flex;
  width: 100%;
  height: 18%;
  justify-content: center;
  gap: 2%;
  margin-bottom: 5%;
`;

export const MemberItem2 = styled.div<{ width: string }>`
  display: flex;
  color: #00AA47;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #F5F5F5;
  width: ${({ width }) => width};
  box-sizing: border-box;
`;
