import styled, { css } from 'styled-components';

export const TypeLayout = styled.div`
  display: flex;
  width: 96%;
  box-sizing: border-box;
  padding: 0.7% 1% 0  0%;
  margin: 3% 3% 1% 3%;
  height: 5.5%;
`;

export const TypeComponent = styled.div`
  padding: 0.5% 1% 0.5% 0;
  width: 16%;
`;

const buttonStyles = css<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? 'black' : '#F2F2F2')};
  color: ${({ selected }) => (selected ? 'white' : 'black')};
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px; 
  cursor: pointer;
  border: none;
  border-radius: 8px;
  height: 100%;
  width: 100%; 
  white-space: nowrap;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'black' : '#ddd')};
  }
`;

export const Twoto2 = styled.button<{ selected: boolean }>`
  ${buttonStyles}
`;

export const Threeto3 = styled(Twoto2)``;

export const Oneto1 = styled(Twoto2)``;

export const Random = styled(Twoto2)``;

export const lookComponent = styled.div`
  font-size: 12px;
  color: #333;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end; 
  flex-grow: 1;
  padding-bottom: 1%;
`;

export const lookword = styled.span`
  color: black;
  margin-right: 1%;
  white-space: nowrap;
`;