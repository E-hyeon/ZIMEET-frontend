import React, { useEffect } from 'react';
import * as S from './Styles';
import ChattingInventoryTypeButton from '../../../components/Chatting/ChattingInventory/ChattingInventoryTypeButton/ChattingInventoryTypeButton';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import Teams from 'components/Chatting/ReceiveHi/Teams/Teams';
import { track } from '@amplitude/analytics-browser';

const ReceiveHi: React.FC = () => {
  useEffect(() => {
    track('[접속]채팅_받은하이');
  }, []);

  return (
    <S.ReceiveHiLayout>
      <S.ReceiveHiTitle>채팅</S.ReceiveHiTitle>
      <ChattingInventoryTypeButton />
      <S.ReceiveHiExplanation>
        <strong>내가 속해있는 팀에게 하이가 왔어요!</strong>
        <br />
        받은 하이는 방치를 방지하고자 <span>5시간 후에 사라져요!</span>
      </S.ReceiveHiExplanation>
      <Teams />
      <NavigationBar />
    </S.ReceiveHiLayout>
  );
};

export default ReceiveHi;
