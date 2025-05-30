import React, { useState } from 'react';
import * as S from './Styles';

interface AcceptHiProps {
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
}

const AcceptHiModal: React.FC<AcceptHiProps> = ({
  userName,
  onClose,
  onConfirm,
}) => {
  return (
    <S.ModalLayout>
      <S.ModalContent>
        <S.ModalTitle>{userName} 님의 하이를 수락할까요?</S.ModalTitle>
        <S.ModalText>
          {userName} 님이 보낸 하이를 수락하면
          <br />
          채팅방이 열려요!
          <br />
          수락한 하이는 취소할 수 없어요.
        </S.ModalText>
        <S.ButtonBox>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.AcceptButton onClick={onConfirm}>
            <S.Text>수락하기</S.Text>
          </S.AcceptButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.ModalLayout>
  );
};

export default AcceptHiModal;
