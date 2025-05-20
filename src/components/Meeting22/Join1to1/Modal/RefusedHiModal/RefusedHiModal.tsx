import React from 'react';
import * as S from './Styles';

interface RefusedHiModalProps {
  onClose: () => void;
}

const RefusedHiModal: React.FC<RefusedHiModalProps> = ({ onClose }) => {
  return (
    <S.ModalLayout>
      <S.ModalContent>
        <S.ModalTitle>하이를 거절했어요</S.ModalTitle>
        <S.ModalText>
          새로운 분에게 하이를 보내보세요!
          <br />더 좋은 인연이 기다리고 있을 거예요 :)
        </S.ModalText>
        <S.CancelButton onClick={onClose}>닫기</S.CancelButton>
      </S.ModalContent>
    </S.ModalLayout>
  );
};

export default RefusedHiModal;
