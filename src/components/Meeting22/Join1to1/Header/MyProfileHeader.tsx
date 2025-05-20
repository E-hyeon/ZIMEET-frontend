import React, { useState } from 'react';
import * as S from './Styles';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '../../../../assets/icon/TeamInfo/DeleteIcon.svg';
import DeleteModal from '../Modal/DeleteModal/DeleteModal';

const MyProfileHeader: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDeleteConfirm = () => {
    setIsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.HeaderLayout>
      <S.BackContainer>
        <S.BackButton onClick={() => navigate(-1)} />
        <S.Title>내 프로필</S.Title>
      </S.BackContainer>
      <S.DeleteButton onClick={handleDeleteClick}>
        <S.DeleteIcon src={DeleteIcon} />
      </S.DeleteButton>

      {isDropdownOpen && (
        <S.DropdownMenu>
          <S.DropdownItem onClick={handleDeleteConfirm}>
            프로필 내리기
          </S.DropdownItem>
        </S.DropdownMenu>
      )}

      {isModalOpen && <DeleteModal onClose={handleCloseModal} />}
    </S.HeaderLayout>
  );
};

export default MyProfileHeader;
