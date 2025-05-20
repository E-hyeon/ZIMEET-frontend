import React, { useEffect } from 'react';
import * as S from './Styles';
import ChattingInventoryTypeButton from '../../../components/Chatting/ChattingInventory/ChattingInventoryTypeButton/ChattingInventoryTypeButton';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import Teams from 'components/Chatting/ChattingInventory/Teams/Teams';
import { track } from '@amplitude/analytics-browser';

const ChattingInventory: React.FC = () => {
  useEffect(() => {
    track('[접속]채팅');
  }, []);
  return (
    <>
      <S.ChattingInventoryLayout>
        <S.ChattingInventoryTitle>채팅</S.ChattingInventoryTitle>
        <ChattingInventoryTypeButton />
        <Teams />
      </S.ChattingInventoryLayout>
      <NavigationBar />
    </>
  );
};

export default ChattingInventory;
