import styled from 'styled-components';
import * as I from '../../../assets/Icons';

export const GdgocIntroductLayout = styled.div`
  width: 100%;
  height: 100%; 
  background-color: #ffffff;
  font-family: Pretendard, sans-serif;
`;

export const GdgocContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
`;

export const AboutGdgocCuk = styled(I.AboutGdgocCuk)`
    height: 3%;
    width: 50%;
    margin: 5% 0 0 5%;
`;

export const Explanation1 = styled.div`
  font-size: 15px;
  color: #000000;
  margin: 3% 3% 0 5%;
  line-height: 1.5;
`;

export const Explanation2 = styled.div`
  font-size: 12px;
  color: #000000;
  margin: 0% 3% 0 5%;
  line-height: 1.5;
`;

export const BigLogo = styled(I.BigLogo)`
    height: 15%;
    width: 20%;
    margin: 3% 0 0 1%;
`;

export const gdgExplanation1 = styled.div`
  font-size: 13px;
  color: #000000;
  margin: 1% 3% 10% 5%;
  line-height: 1.5;

  b {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: -13px;
    display: block;
  }
`;

export const gdgExplanation2 = styled(gdgExplanation1)`
u {
  margin-right: 20%;}
span {
  margin-right: 9.5%;}

a {
  margin-right: 18.7%;

  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    margin-right: 17.5%;
  }}
}

p{
  margin-left: 44%;
  @media (max-width: 768px) {
  @supports (-webkit-touch-callout: none) {
    margin-right: 30%;
  }}

  }
`;

export const gdgExplanationto3 = styled.div`
font-size: 13px;
  color: #000000;
  margin-right: 10%;
  line-height: 1.5;

  b {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: -13px;
    display: block;
  }
`;

export const gdgExplanation3 = styled(gdgExplanation1)`
  
`;

export const Componentto3 = styled.div`
  display: flex;
  flex-direction: row;
`;




