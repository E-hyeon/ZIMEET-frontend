import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedSpaceState, boothState } from '../../../recoilStores/state/boothState';
import * as S from './Styles';
import Booth from './Booth';
import { Getbooths } from '../../../api/booth/Getbooths';
import * as amplitude from '@amplitude/analytics-browser';


const getBoothIndexesBySpace = (space: string): number[] => {
  switch (space) {
    case 'A':
      return [0, 1, 2, 3, 4, 5, 12, 17, 18, 23, 24, 26, 29];
    case 'S':
      return [0, 1, 2, 3, 4, 5,8,9,10,13,14,15,18,19,20,23,24,25,28,29,32,33,34,36,37,38,39];
    case 'K':
      return [0, 1, 2];
    case 'G':
      return [0, 3, 4, 7,8, 11,12,15,16,19,20,23,24,27,28,31,32,35,36,39,40,43,44,47,48,51,52];
    default:
      return []; 
  }
};

const Booths: React.FC = () => {
  const [booths, setBooths] = useRecoilState(boothState);
  const selectedSpace = useRecoilValue(selectedSpaceState) as keyof typeof boothTime;

  //안드레아 사용자리 index 
  const boothIndexesToUse = getBoothIndexesBySpace(selectedSpace);
  
  const boothGrid = Array(
    selectedSpace === 'S' ? 39 : 
    selectedSpace === 'G' ? 52 :
    selectedSpace === 'K' ? 3 : 
    29
  ).fill(null);

  booths.forEach((booth, i) => {
    const idx = boothIndexesToUse[i];
    if (idx !== undefined) boothGrid[idx] = booth;
  });

  const boothTime = {
    A: '부스 운영 시간 : 10 : 00 ~ 16 : 00',
    S: '부스 운영 시간 : 10 : 00 ~ 16 : 00',
    K: '부스 운영 시간 : 10 : 00 ~ 16 : 00',
    G: '부스 운영 시간 : 18 : 00 ~ 1 : 00',
    F: '부스 운영 시간 : 10 : 00 ~ 16 : 00',
  }
  useEffect(() => {
    const fetchBooths = async () => {
      const response = await Getbooths(selectedSpace);
      if (response) {
        setBooths(response.data.clubList);
      }
    };

    fetchBooths();
  }, [selectedSpace, setBooths]);

  return (
      <S.BoothLayout>
        <S.BoothsContainer>
          <S.BoothTime>{boothTime[selectedSpace]}</S.BoothTime>
          <S.Booths $selectedSpace={selectedSpace}>
            {boothGrid.map((booth, idx) => (
              <Booth key={idx} booth={booth}  />
            ))}
            {selectedSpace === 'A'? <S.EatPlace>취식존</S.EatPlace> : null}
            {selectedSpace === 'G'? <S.GroundInfo1>중앙무대</S.GroundInfo1> : null}
            {selectedSpace === 'G'? <S.GroundInfo2>축기단 본부</S.GroundInfo2> : null}
            {selectedSpace === 'G'? <S.GroundInfo3>푸드트럭</S.GroundInfo3> : null}
            {selectedSpace === 'G'? <S.GroundInfo4>푸드트럭</S.GroundInfo4> : null}
            {selectedSpace === 'K'? <S.KPlace>김수환관 4층</S.KPlace> : null }
            {selectedSpace === 'K'? <S.Divider /> : null}
            {selectedSpace === 'K'? <S.HPlace>학관</S.HPlace> : null}
            {selectedSpace === 'K'? <S.Photobooth1>포토부스</S.Photobooth1> : null}
            {selectedSpace === 'K'? <S.Photobooth2>포토부스</S.Photobooth2> : null}
          </S.Booths>
        </S.BoothsContainer>
      </S.BoothLayout>
  );
};

export default Booths;
