import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from './Styles';
import { UserType } from 'recoilStores/type/Meeting/OnetoOneGalleryType';
import { getImageByEmoji } from 'utils/IconMapper';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/UserToast/Toast';
import { mappingMusic } from '../../../data/SignUpData';
import { track } from '@amplitude/analytics-browser';
import { MyProfileState } from 'recoilStores/state/Meeting/MyProfileState';

interface UserProfileProps {
  userData: UserType | null;
  teamType: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  const navigate = useNavigate();
  const myProfileState = useRecoilValue(MyProfileState);
  const [isToastOpen, setIsToastOpen] = useState(false);

  if (!userData) {
    return <div>유저 정보가 없습니다.</div>;
  }

  const isVerified = userData.verification === 1;

  const handleUserClick = () => {
    if (myProfileState === null) {
      setIsToastOpen(true);
      return;
    }
    track('[클릭]미팅_이성유저프로필');
    navigate(`/Profile1to1/${userData.userId}`, {
      state: { from: 'meeting' },
    });
  };

  return (
    <>
      <S.TeamLayOut onClick={handleUserClick}>
        <S.EmojiContainer>
          <S.MemberItem1>
            <img src={getImageByEmoji(userData.emoji)} alt={userData.emoji} />
          </S.MemberItem1>
        </S.EmojiContainer>
        <S.NameContainer>
          <S.TeamNameBox>{userData.nickname}</S.TeamNameBox>
          <S.MajorBox>
            {isVerified && <S.CertificationIcon />}
            <S.MajorDisplay>
              {userData.major} | {userData.age}세
            </S.MajorDisplay>
          </S.MajorBox>
        </S.NameContainer>
        <S.MemberInfo>
          <S.MemberItem2 width="65%">
            {mappingMusic(userData.music)}
          </S.MemberItem2>
        </S.MemberInfo>
      </S.TeamLayOut>
      <Toast isOpen={isToastOpen} onClose={() => setIsToastOpen(false)} />
    </>
  );
};

export default UserProfile;
