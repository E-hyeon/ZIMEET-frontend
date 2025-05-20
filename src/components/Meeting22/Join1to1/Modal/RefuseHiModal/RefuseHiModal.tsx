import React, { useState } from 'react';
import * as S from './Styles';

interface RefuseHiProps {
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
}

const RefuseHiModal: React.FC<RefuseHiProps> = ({
  userName,
  onClose,
  onConfirm,
}) => {
  return (
    <S.ModalLayout>
      <S.ModalContent>
        <S.ModalTitle>{userName} 님의 하이를 거절할까요?</S.ModalTitle>
        <S.ModalText>
          '{userName}' 님이 보낸 하이를 거절하면
          <br />
          {userName}에게는 다시 하이를 받을 수 없고
          <br />
          한 번 거절한 기록은 취소되지 않아요. 🥲
          <br />
          하이를 거절했다는 알림은 보내지지 않아요.
        </S.ModalText>
        <S.ButtonBox>
          <S.CancelButton onClick={onClose}>
            <S.Text>취소하기</S.Text>
          </S.CancelButton>
          <S.RefuseButton onClick={onConfirm}>거절</S.RefuseButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.ModalLayout>
  );
};

export default RefuseHiModal;
