import styled from 'styled-components';

export const ToastLayOut = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  bottom: 10%;
  left: 0;
  z-index: 1000;
`;

export const ToastText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 55%;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Pretendard';
  border-radius: 20px;
  color: #ffffff;
  background-color: #000000;
`;
