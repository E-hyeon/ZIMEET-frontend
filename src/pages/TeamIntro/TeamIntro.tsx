import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import * as S from './Styles';
import Header from 'components/TeamIntro/Header/Header';
import MyProfile from 'components/Common/Profile/MyProfile';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import Heart from 'components/TeamIntro/Button/Heart/Heart';
import SendQuestion from 'components/TeamIntro/Modal/SendQuestion/SendQuestion';
import Send from 'components/TeamIntro/Modal/Send/Send';
import SentHiButton from 'components/TeamIntro/Button/SentHiButton/SentHiButton';
import { TeamData, User } from 'recoilStores/type/Meeting/TeamDetail';
import { getTeamDetail } from 'api/Meeting/GetTeamDetail';
import AcceptHiModal from 'components/Chatting/ReceiveHi/Modal/AcceptHiModal/AcceptHiModal';
import AcceptedHiModal from 'components/Chatting/ReceiveHi/Modal/AcceptedHiModal/AcceptedHiModal';
import RefuseHiModal from 'components/Chatting/ReceiveHi/Modal/RefuseHiModal/RefuseHiModal';
import RefusedHiModal from 'components/Chatting/ReceiveHi/Modal/RefusedHiModal/RefusedHiModal';
import patchrefuseHi from 'api/Hi/PatchrefuseHi';
import { ourteamIds } from 'recoilStores/state/ourTeamIds';
import { getacceptHi } from 'api/Chatting/GetacceptHi';
import { track } from '@amplitude/analytics-browser';

const TeamIntro = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const location = useLocation();
  const { teamType, from } = location.state || {};
  const [teamDetailData, setTeamDetailData] = useState<TeamData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const ourTeamIdsValue = useRecoilValue(ourteamIds);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);
  const [isRefuseModalOpen, setIsRefuseModalOpen] = useState(false);
  const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);
  const [isRefusedModalOpen, setIsRefusedModalOpen] = useState(false);
  const navigate = useNavigate();

  //팀 상세데이터 가져오기
  useEffect(() => {
    track('[접속]미팅_이성팀상세보기');
    const fetchDataAndCheckPremium = async () => {
      setIsLoading(true);

      try {
        if (teamId) {
          const response = await getTeamDetail(Number(teamId));
          if (response?.data) {
            setTeamDetailData(response.data);
          } else {
            setTeamDetailData(null);
          }
        }
      } catch (error) {
        console.error('Error fetching team data:', error);
        setTeamDetailData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndCheckPremium();
  }, [teamId]);

  //미팅모달
  const openModal = () => {
    track('[버튼]미팅_이성팀상세보기_하이보내기');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    track('[버튼]미팅_이성팀상세보기_하이보내기_취소');
    setIsModalOpen(false);
  };

  const confirmModal = () => {
    track('[버튼]미팅_이성팀상세보기_하이보내기_확정');
    setShowSend(true);
    setIsModalOpen(false);
  };

  const closeSendModal = () => {
    track('[버튼]미팅_이성팀상세보기_하이보내기_확정안내닫기');
    setShowSend(false);
    navigate('/Meeting22');
  };

  //하이모달
  const openAcceptModal = () => {
    setIsAcceptModalOpen(true);
  };
  const closeAcceptModal = () => {
    setIsAcceptModalOpen(false);
  };

  const openAcceptedModal = async () => {
    if (!teamDetailData) return;

    try {
      if (!ourTeamIdsValue) {
        console.error('우리팀이 없습니다.');
        return;
      }
      const toId =
        teamDetailData.userList.length === 3
          ? ourTeamIdsValue[1]
          : ourTeamIdsValue[0];
      const requestData = {
        toId: toId,
        fromId: teamDetailData.teamId,
      };

      await getacceptHi(requestData);
      setIsAcceptModalOpen(false);
      setIsAcceptedModalOpen(true);
    } catch (error) {
      console.error('하이 수락 api 요청 실패', error);
    }
  };
  const closeAcceptedModal = () => {
    setIsAcceptedModalOpen(false);
    navigate('/chattingInventory');
  };

  const openRefuseModal = () => {
    setIsRefuseModalOpen(true);
  };
  const closeRefuseModal = () => {
    setIsRefuseModalOpen(false);
  };

  const openRefusedModal = async () => {
    if (!teamDetailData) return;

    try {
      if (!ourTeamIdsValue) {
        console.error('우리팀이 없습니다.');
        return;
      }
      const toId =
        teamDetailData.userList.length === 3
          ? ourTeamIdsValue[1]
          : ourTeamIdsValue[0];
      const requestData = {
        toId: toId,
        fromId: teamDetailData.teamId,
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

  const isPremium = teamDetailData?.level === 'PLUS' ? true : false;

  return (
    <S.TeamIntroLayout>
      <Header
        verification={teamDetailData?.verification ?? 0}
        name={teamDetailData?.name || ''}
      />
      <S.TeamIntroContainer $isPremium={isPremium}>
        {teamDetailData?.userList.map((user: User) => (
          <MyProfile
            key={user.userId}
            profileData={user}
            gender={teamDetailData.gender}
            isPremium={isPremium}
          />
        ))}
      </S.TeamIntroContainer>
      {teamDetailData?.hi === true ? (
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
      )}
      <NavigationBar />

      {isModalOpen && teamDetailData?.teamId !== undefined && (
        <SendQuestion
          onClose={closeModal} //하이보내겠습니까? 모달 닫기
          onConfirm={confirmModal} //하이보내기 완료모달열기
          teamName={teamDetailData?.name || ''}
          teamId={teamDetailData.teamId}
          teamType={teamType}
        />
      )}
      {showSend && <Send onClose={closeSendModal} />}

      {isAcceptModalOpen && (
        <AcceptHiModal
          onClose={closeAcceptModal}
          onConfirm={openAcceptedModal}
          teamName={teamDetailData?.name || ''}
        />
      )}
      {isAcceptedModalOpen && <AcceptedHiModal onClose={closeAcceptedModal} />}
      {isRefuseModalOpen && (
        <RefuseHiModal
          onClose={closeRefuseModal}
          onConfirm={openRefusedModal}
          teamName={teamDetailData?.name || ''}
        />
      )}
      {isRefusedModalOpen && <RefusedHiModal onClose={closeRefusedModal} />}
    </S.TeamIntroLayout>
  );
};

export default TeamIntro;
