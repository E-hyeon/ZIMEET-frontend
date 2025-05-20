import styled from 'styled-components';
import HeaderLogo from 'assets/icon/SetList/SetListHeader.svg?react';

export const SetListLayout = styled.div`
  background-color: #FFFFFF;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Pretendard, sans-serif;
`;

export const SetListHeader = styled.div<{ $stageType: string }>`
  width: 100%;
  height: 20%;
  background-color:  ${({ $stageType }) => $stageType};
  position: relative;
`;

export const HeaderLogoIcon = styled(HeaderLogo)`
  margin: 8.5% 0 0 0;
  width: 58%;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 0;
`;

export const HeaderInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
`;

export const HeaderComponent = styled.div`
  width: 62%;
  height: 100%;
  padding-left: 3%;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const DayText = styled.div`
  width: 100%;
  height: 49%;
  padding-bottom: 3%;
  display: flex;
  justify-content: flex-start; 
  align-items: flex-end;
  font-size: 0.875rem;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
`;

export const StageTitle = styled.div<{ $fontSize? : string}>`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start;
  font-size: ${({ $fontSize }) => ($fontSize ? $fontSize : '53px')};
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
  white-space: pre-wrap;
`;

export const TimeText = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  z-index: 1;
  margin-bottom: 3%;
`;

export const ChangeDay = styled.div`
  width: 100%;  
  height: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DayButtonContainer = styled.button`
  width: 50%;
  height: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DayButton = styled.div<{ $isActive: boolean, $isLast: boolean }>`
  color: ${({ $isActive }) => ($isActive ? '#000' : '#9E9E9E')};
  font-weight: 500;
  font-size: 14px;
  height: 25%;
  width: 100%;
  border-right: ${({ $isLast }) => ($isLast ? 'none' : '2px solid #F2F2F2')};
`;


export const StageType = styled.div`
  width: 100%;  
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap : 2.5%;
  border-top: 1px solid #D9D9D9;
`;

export const StageTypeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SquareIcon = styled.div<{ color: string }>`
  width: 16px;
  height: 14px;
  background-color: ${({ color }) => color};
  border-radius: 4px;
  margin-right: 5%;
`;

export const StageTypeText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: Medium;
  color: #000000;
  white-space: nowrap;
`;

export const StageListContainer = styled.div`
  width: 100%;  
  height: 57%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  overflow-y: auto;
  padding: 2% 0;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TimeLine = styled.div`
  width: 15%;  
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimeLineText = styled.div`
  width: 100%;
  padding: 8% 0;
  font-size: 12px;
  font-weight: Regular;
  color: #D9D9D9;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeLineIcon = styled.div`
  width: 40%;
  border-radius: 50%;
  aspect-ratio: 1;
  background-color: #D9D9D9;
  border-radius: 50%;
`;
  

export const Line = styled.div<{ height?: string }>`
  width: 1px; 
  height: ${({ height }) => height};
  background-image: repeating-linear-gradient(
    to bottom,
    #D9D9D9 0px,
    #D9D9D9 8px,
    transparent 8px,
    transparent 16px
  );
`;

export const TimeWhiteCircle = styled.div`
  width: 25%;
  background-color: #FFFFFF;
  border-radius: 50%;
  aspect-ratio: 1;
  border: 3px solid #D9D9D9;
`;


export const StageList = styled.div`
  width: 85%;  
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 7.5%;
`;

export const StageItem = styled.div<{ $isActive: boolean }>`
  width: 95%;
  margin-right: 5%;
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 14px;
  box-shadow: ${({ $isActive }) => $isActive? '0px 0px 6px #FF6868' : '0px 0px 6px #D9D9D9'};
`;

export const StageColor = styled.div<{ $stageType: string }>`
  width: 4%;
  height: 100%;
  background-color: ${({ $stageType }) => $stageType};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 14px 0 0 14px;
`;

export const StageTime = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: Regular;
  color: #000000;
`;

export const StageName = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: SemiBold;
  color: #000000;
  white-space: nowrap;
`;



