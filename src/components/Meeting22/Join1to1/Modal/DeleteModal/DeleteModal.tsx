import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import patchJoin1to1 from 'api/Meeting/PatchJoin1to1';

interface DeleteModalProps {
  onClose: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleProfileDown = async () => {
    const response = await patchJoin1to1({ status: 'INACTIVE' });
    if (response) {
      navigate('/meeting22');
    } else {
      console.error('프로필 내리기 실패');
    }
  };

  return (
    <S.ModalContainer>
      <S.ModalContent>
        <S.ModalTitle>내 프로필을 갤러리에서 내릴까요?</S.ModalTitle>
        <S.ModalText>
          프로필을 내리면 갤러리에서 보이지 않고 <br />
          그동안 이 프로필로 <b>보낸/받은 하이들도 사라져요.</b>
          <br />
          프로필 내리기는 신중히 생각해주세요!
        </S.ModalText>
        <S.ButtonBox>
          <S.CancelButton onClick={onClose}>취소하기</S.CancelButton>
          <S.ConfirmButton onClick={handleProfileDown}>내리기</S.ConfirmButton>
        </S.ButtonBox>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default DeleteModal;
