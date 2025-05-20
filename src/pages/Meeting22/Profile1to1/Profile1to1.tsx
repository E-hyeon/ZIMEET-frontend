import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import Header from 'components/Common/Header/Header/Header';
import MyProfileHeader from 'components/Meeting22/Join1to1/Header/MyProfileHeader';
import { UserData } from 'recoilStores/type/Meeting/UserDetail';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getImageByEmoji } from 'utils/IconMapper';
import { track } from '@amplitude/analytics-browser';
import ProfileDetail from 'components/Common/Profile/ProfileDetail/ProfileDetail';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import SentHiButton from 'components/TeamIntro/Button/SentHiButton/SentHiButton';
import Heart from 'components/TeamIntro/Button/Heart/Heart';
import SendQuestion from 'components/Meeting22/Join1to1/Modal/SendQuestion/SendQuestion';
import Send from 'components/TeamIntro/Modal/Send/Send';
import AcceptHiModal from 'components/Meeting22/Join1to1/Modal/AcceptHiModal/AcceptHiModal';
import AcceptedHiModal from 'components/Chatting/ReceiveHi/Modal/AcceptedHiModal/AcceptedHiModal';
import postacceptUserHi from 'api/Hi/PostacceptUserHi';
import RefuseHiModal from 'components/Meeting22/Join1to1/Modal/RefuseHiModal/RefuseHiModal';
import patchrefuseHi from 'api/Hi/PatchrefuseHi';
import RefusedHiModal from 'components/Meeting22/Join1to1/Modal/RefusedHiModal/RefusedHiModal';
import {
  mappingMusic,
  mappingStyle,
  mappingAge,
  mappingFace,
} from 'data/SignUpData';
import { MyProfileState } from 'recoilStores/state/Meeting/MyProfileState';
import { useRecoilValue } from 'recoil';
import { getOnetoOneDetail } from 'api/Meeting/GetOnetoOneDetail';
import { getmyProfile } from 'api/Mypage/GetmyProfile';
import { MyProfileType } from 'recoilStores/type/MyPage/MyProfileType';

const Profile1to1 = () => {
  const { from } = useLocation().state as {
    from?: string;
  };
  const [MyProfileDetail, setMyProfileDetail] = useState<MyProfileType | null>(
    null,
  );
  const params = useParams();
  const { userId } = params as { userId: string };
  const isMyProfile = from === 'profile1to1';
  const [userProfile, setUserProfile] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const MyProfile = useRecoilValue(MyProfileState);
  const [showSend, setShowSend] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRefuseModalOpen, setIsRefuseModalOpen] = useState(false);
  const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);
  const [isRefusedModalOpen, setIsRefusedModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    track('[버튼]미팅_이성유저상세보기_하이보내기');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    track('[버튼]미팅_이성유저상세보기_하이보내기_취소');
    setIsModalOpen(false);
  };

  const confirmModal = () => {
    track('[버튼]미팅_이성유저상세보기_하이보내기_확정');
    setShowSend(true);
    setIsModalOpen(false);
  };

  const closeSendModal = () => {
    track('[버튼]미팅_이성유저상세보기_하이보내기_확정안내닫기');
    setShowSend(false);
    navigate('/Meeting22');
  };

  //하이수락모달
  const openAcceptModal = () => {
    setIsAcceptModalOpen(true);
  };

  const closeAcceptModal = () => {
    setIsAcceptModalOpen(false);
  };

  //하이수락완료모달
  const openAcceptedModal = async () => {
    if (!userProfile) return;

    try {
      if (!isMyProfile) {
        console.error('내 정보가 없습니다.');
        return;
      }

      const requestData = {
        toId: userProfile?.userId,
        fromId: MyProfile?.userId,
      };

      await postacceptUserHi(requestData);
      setIsAcceptModalOpen(false);
      setIsAcceptedModalOpen(true);
    } catch (error) {
      console.error('하이 수락 api 요청 실패', error);
    }
  };

  const closeAcceptedModal = () => {
    setIsAcceptedModalOpen(false);
    navigate('/meeting22');
  };

  //refuse모달
  const openRefuseModal = () => {
    setIsRefuseModalOpen(true);
  };
  const closeRefuseModal = () => {
    setIsRefuseModalOpen(false);
  };

  //하이거절완료모달
  const openRefusedModal = async () => {
    if (!userProfile) return;

    try {
      if (!isMyProfile) {
        console.error('내 정보가 없습니다.');
        return;
      }
      const requestData = {
        toId: MyProfile?.userId,
        fromId: userProfile?.userId,
        type: 'USER',
      };

      await patchrefuseHi(requestData);
      setIsRefuseModalOpen(false);
      setIsRefusedModalOpen(true);
    } catch (error) {
      console.error('하이 거절 API 요청 실패:', error);
    }
  };
  const closeRefusedModal = () => {
    setIsRefusedModalOpen(false);
    navigate('/receiveHi');
  };
  //유저 프로필
  useEffect(() => {
    track('[접속]미팅_1대1참여');
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        if (isMyProfile) {
          // 나의 프로필 가져오기
          const res = await getmyProfile();
          setMyProfileDetail(res?.data ?? null);
        } else {
          // 다른 사람 프로필 가져오기
          const res = await getOnetoOneDetail(Number(userId));
          setUserProfile(res?.data ?? null);
        }
      } catch (err) {
        console.error('Error fetching profile data:', err);
        setMyProfileDetail(null);
        setUserProfile(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [isMyProfile, userId]);

  const displayedProfile = isMyProfile ? MyProfileDetail : userProfile;

  return (
    <S.UserdetailLayout>
      {isMyProfile ? <MyProfileHeader /> : <Header title="프로필 보기" />}
      {isLoading ? (
        <S.LoadingContainer />
      ) : displayedProfile ? (
        <>
          <S.Avatar>
            <img
              src={getImageByEmoji(displayedProfile.emoji)}
              alt={displayedProfile.emoji}
            />
          </S.Avatar>
          <S.UserInfo $isMusic={false}>
            <b>{displayedProfile.nickname}</b> | {displayedProfile.age}세 (
            {displayedProfile.studentNumber?.slice(2, 4)}학번)
          </S.UserInfo>
          <S.UserInfo $isMusic={false}>{displayedProfile.major}</S.UserInfo>
          <S.MusicContainer>
            <p>좋아하는 음악장르</p>
            <S.UserInfo $isMusic={true}>
              {mappingMusic(displayedProfile.music)}
            </S.UserInfo>
          </S.MusicContainer>

          <S.Title>
            {isMyProfile ? '나에 대한 상세 정보' : '추가 정보를 알려드려요!'}
          </S.Title>
          {!isMyProfile && displayedProfile.level === 'LIGHT' ? (
            <S.PremiumOverlay1>
              <S.PremiumText1>
                터치해서 ZI밋+로 등급 올리고 확인하기!
                <br />
                <span>2500원</span>
                <br />
                눌러서 결제
              </S.PremiumText1>
            </S.PremiumOverlay1>
          ) : (
            <S.UserContainer>
              <ProfileDetail
                label="MBTI"
                value={displayedProfile.mbti}
                gender={displayedProfile.gender}
                ischat={true}
              />
              <ProfileDetail
                label="스타일"
                value={mappingStyle(displayedProfile.style)}
                gender={displayedProfile.gender}
                ischat={true}
              />
            </S.UserContainer>
          )}
          <S.Title>
            {isMyProfile
              ? '내 이상형 정보'
              : `${displayedProfile.nickname}의 이상형은?`}
          </S.Title>
          {!isMyProfile && displayedProfile.level === 'LIGHT' ? (
            <S.PremiumOverlay2>
              <S.PremiumText2>
                <b>지밋+등급</b>이 되면 볼 수 있어요.
                <br />
                <b>2500원</b>으로 <b>아우름제 시즌 내내!</b>
              </S.PremiumText2>
            </S.PremiumOverlay2>
          ) : (
            <S.UserContainer>
              <ProfileDetail
                label="이상형"
                value={mappingFace(displayedProfile.idealType)}
                gender={displayedProfile.gender}
                ischat={true}
              />
              <ProfileDetail
                label="선호나이"
                value={mappingAge(displayedProfile.idealAge)}
                gender={displayedProfile.gender}
                ischat={true}
              />
            </S.UserContainer>
          )}
        </>
      ) : (
        <p>유저 프로필을 찾을수 없습니다 </p>
      )}

      {!isMyProfile &&
        (userProfile?.hi === true ? (
          <SentHiButton />
        ) : from === 'meeting' ? (
          <Heart onClick={openModal} />
        ) : from === 'sendHi' ? (
          <SentHiButton />
        ) : (
          <S.ButtonWrapper>
            <S.RefuseButton onClick={openRefuseModal}>거절</S.RefuseButton>
            <S.Button onClick={openAcceptModal}>하이 수락하기</S.Button>
          </S.ButtonWrapper>
        ))}

      <NavigationBar />

      {/* 하이보내기 모달 */}
      {isModalOpen && userProfile && (
        <SendQuestion
          onClose={closeModal} //하이보내겠습니까? 모달 닫기
          onConfirm={confirmModal} //하이보내기 완료모달열기
          user={userProfile || ''}
        />
      )}

      {/* 하이보내기 완료 모달 */}
      {showSend && <Send onClose={closeSendModal} />}

      {/* 하이 수락 모달 */}
      {isAcceptModalOpen && (
        <AcceptHiModal
          onClose={closeAcceptModal}
          onConfirm={openAcceptedModal}
          userName={userProfile?.nickname || ''}
        />
      )}
      {/* 하이수락 완료모달 */}
      {isAcceptedModalOpen && <AcceptedHiModal onClose={closeAcceptedModal} />}
      {/* 하이거절  */}
      {isRefuseModalOpen && (
        <RefuseHiModal
          onClose={closeRefuseModal}
          onConfirm={openRefusedModal}
          userName={userProfile?.nickname || ''}
        />
      )}
      {isRefusedModalOpen && <RefusedHiModal onClose={closeRefusedModal} />}
    </S.UserdetailLayout>
  );
};

export default Profile1to1;
