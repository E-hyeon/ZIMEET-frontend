import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const BoothLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 75%;
  margin: 5% 3% 0 3%;
  justify-content: space-between;
  font-family: Pretendard, sans-serif;
`;


export const BoothsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BoothTime = styled.div`
  background-color: #F2F2F2;
  border-radius: 5px;
  color: #9C978C;
  font-size: 13px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  margin-bottom: 3%;
`;



export const Booths = styled.div<{ $selectedSpace: string }>`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: ${props => (props.$selectedSpace === 'A' || props.$selectedSpace === 'K') ? 'hidden' : 'auto'};
  height: 92%;
  width: 100%;
  scrollbar-width: none;
`;

export const EatPlace = styled.div`
  width: 60%;
  height: 50%;
  margin-top: 33%;
  margin-left: 20%;
  border-radius: 5px;
  background-color:rgb(248, 245, 245);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color:rgb(216, 215, 212);
  font-size: 18px;
  font-weight: bold;
  z-index: 1;
`;

//중앙무대, 축기단 본부 
export const GroundInfo1 = styled.div`
  width: 54%;
  height: 15%;
  margin-top: 0%;
  margin-left: 23%;
  border-radius: 5px;
  background-color: #F2F2F2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color:rgb(184, 180, 173);
  font-size: 18px;
  font-weight: bold;
  z-index: 1;
`;

export const GroundInfo2 = styled(GroundInfo1)`
  margin-top: 180%;
`;

export const GroundInfo3 = styled(GroundInfo1)`
  margin-top: 203%;
`;

export const GroundInfo4 = styled(GroundInfo1)`
  margin-top: 302%;
`;

export const KPlace = styled.div`
  width: 100%;
  height: 12%;
  margin-top: 3%;
  border-radius: 8px;
  background-color: #F0F0F0;
  opacity: 0.6;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgb(184, 180, 173);
  font-size: 13px;
  font : Pretendard;
  font-weight: bold;
  z-index: 1;
`;

export const HPlace = styled(KPlace)`
  margin-top: 74%;
`;

export const Photobooth1 = styled.div`
  width: 23%;
  height: 12%;
  margin-top: 107%;
  margin-left: 52%;
  border-radius: 8px;
  background-color: #F0F0F0;
  opacity: 0.6;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgb(184, 180, 173);
  font-size: 13px;
  font : Pretendard;
  font-weight: bold;
  z-index: 1;
`;

export const Photobooth2 = styled(Photobooth1)`
  margin-left: 77%;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #F0F0F0;
  position: absolute;
  top: 45%;
  left: 0;
`;

export const Booth = styled.div<{ $disabled: boolean; $selectedSpace: string }>`
  width: ${props => props.$selectedSpace === 'A' ? '15%' 
                  : props.$selectedSpace === 'S' ? '18%'
                  : props.$selectedSpace === 'K' ? '48%' 
                  : '21%'};
  height: ${props => props.$selectedSpace === 'A' ? '18%' 
                    : props.$selectedSpace === 'K' ? '20%' 
                    : '15%'};
  margin-bottom: 2%;
  margin-top: ${props => props.$selectedSpace === 'K' ? '25%' : '0%'};
  border-radius: 5px;
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: background-color 0.3s ease;
  line-height: 1.5;
  &:hover {
    background-color: ${props => darken(0.1, props.color || '#000')};
  }
`;

export const BoothWho = styled.div`
  color: ${props => props.color};
  font-size: 13px;
  font-weight: bold;
  white-space: pre-wrap;
`;

