import styled from 'styled-components';
import zimeetLoading from '../../../assets/icon/zimeetLoading.svg';

export const UserdetailLayout = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 80%;
   width: 100%;
   overflow: hidden;
   font-family: Pretendard, sans-serif;
`;

export const LoadingContainer = styled.img.attrs({
    src: zimeetLoading
  })`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 60%;
    margin: 0 auto;
  `;

export const Avatar = styled.div `
  width: 20%;
  border-radius: 50%;
  background-color: rgba(234, 67, 53, 0.08);
  display: flex;
  align-items: center;
  justify-content: center; 
  aspect-ratio:1;
  margin:  15% 3% 0 5%;
  img{
    width: 60%;
  }
`;

export const MusicContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7%;
  justify-content: center;
  align-items: center;

  p { 
    font-size: 15px;
    }
`;

export const UserInfo = styled.div<{ $isMusic: boolean }>`
  font-size: 12px;
  color: #000000;
  font-family: 'Pretendard';
  margin-top: 5%;
  text-align: center;
  b{
    font-weight: bold;
  }
    ${({ $isMusic }) => $isMusic && `
        padding: 3%;
        color: #00AA47;
        background: #F2F2F2;
        border-radius: 20px;
        font-weight: bold;
        margin: auto 0 auto 2%;
    `}
`;

export const Title = styled.div`
  font-size: 14px;
  color: #000000;
  font-family: 'Pretendard';
  font-weight: bold;
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const UserContainer = styled.div`
  width: 70%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid #F2F2F2;
  gap: 5%;
`;

export const PremiumOverlay1 = styled.div`
  width: 70%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #000000;
  gap: 5%;
`;

export const PremiumOverlay2 = styled(PremiumOverlay1)`
  background: #F2F2F2;
`;

export const PremiumText1 = styled.div`
  font-size: 12px;
  color: #fff;
  font-family: 'Pretendard';
  text-align: center;
  line-height: 2.1;
  b{
    font-weight: bold;
  }

  span{
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
  }
`;

export const PremiumText2 = styled(PremiumText1)`
  color: #000000;
`;




export const ButtonWrapper = styled.div`
    width: 85%;
    height: 6.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    margin-top: 3%;
    margin-bottom: 5%;
    position: absolute;  
    bottom: 11%;
    left: 7.5%;
`;

export const RefuseButton = styled.button`
    width: 32%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F5F5F5;
    color: #A6A6A6;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
`;

export const Button = styled.button`
    width: 66%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EA4335;
    color: #FFFFFF;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
`;