import React from 'react';
import * as S from './Styles';
import View from '../../../assets/icon/Meeting22/View.svg?react';

interface ViewMoreProps {
  onClick?: () => void;
  teamType?: string;
}

const ViewMore: React.FC<ViewMoreProps> = ({ onClick, teamType }) => {
return (
  <S.ViewMoreButton onClick={onClick}>
    {teamType === 'ONE_TO_ONE' ? '내정보 보기' : '더보기'}<View/>
  </S.ViewMoreButton>
);
};

export default ViewMore;
