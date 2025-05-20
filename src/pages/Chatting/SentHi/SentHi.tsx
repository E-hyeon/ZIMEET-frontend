import React, { useEffect } from 'react';
import * as S from './Styles';
import ChattingInventoryTypeButton from '../../../components/Chatting/ChattingInventory/ChattingInventoryTypeButton/ChattingInventoryTypeButton';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import Teams from 'components/Chatting/SentHi/Teams/Teams';
import { track } from '@amplitude/analytics-browser';

const SentHi: React.FC = () => {
  useEffect(() => {
    track('[접속]채팅_보낸하이');
  }, []);

  return (
    <S.SentHiLayout>
      <S.SentHiTitle>채팅</S.SentHiTitle>
      <ChattingInventoryTypeButton />
      <S.SentHiExplanation>
        <strong>우리 팀이 보냈던 하이</strong>
        <br />
        보낸 하이는 5시간 뒤에 상대방의 받은 하이 목록에서 사라져요.
      </S.SentHiExplanation>
      <Teams />
      <NavigationBar />
    </S.SentHiLayout>
  );
};

export default SentHi;
