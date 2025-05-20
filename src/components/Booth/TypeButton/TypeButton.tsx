import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedSpaceState } from '../../../recoilStores/state/boothState';
import * as S from './Styles';
import * as amplitude from '@amplitude/analytics-browser';

const TypeButton: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useRecoilState(selectedSpaceState);

  const handleClick = (buttonType: string) => {
    setSelectedSpace(buttonType);
    switch(buttonType) {
      case 'A':
        amplitude.track('[클릭]부스_안드레아');
        break;
      case 'S':
        amplitude.track('[클릭]부스_광장');
        break;
      case 'K':
      amplitude.track('[클릭]부스_김수환관');
      break;
      case 'G':
        amplitude.track('[클릭]부스_운동장');
        break;
      case 'F':
        amplitude.track('[클릭]부스_푸드트럭');
        break;
    }
  };

  return (
      <S.TypeLayout>
        <S.TypeComponent>
          <S.SSquare onClick={() => handleClick('A')} selected={selectedSpace === 'A'}>
            안드레아
          </S.SSquare>
        </S.TypeComponent>
        <S.TypeComponent>
          <S.FrontN onClick={() => handleClick('S')} selected={selectedSpace === 'S'}>
            성심광장
          </S.FrontN>
        </S.TypeComponent>
        <S.TypeComponent>
          <S.FrontK onClick={() => handleClick('K')} selected={selectedSpace === 'K'}>
            K관/학관
          </S.FrontK>
        </S.TypeComponent>
        <S.TypeComponent>
          <S.PlayGroud onClick={() => handleClick('G')} selected={selectedSpace === 'G'}>
            운동장
          </S.PlayGroud>
        </S.TypeComponent>
        <S.TypeComponent>
          <S.Andrea onClick={() => handleClick('F')} selected={selectedSpace === 'F'}>
            푸드트럭
          </S.Andrea>
        </S.TypeComponent>
      </S.TypeLayout>
  );
};

export default TypeButton;
