import React, { useState, useEffect, useContext } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import * as S from './Styles';
import NavigationBar from 'components/Common/NavigationBar/NavigationBar';
import TypeButton from '../../components/Meeting22/TypeButton/TypeButton';
import MakeTeam from '../../components/Meeting22/MakeTeam/MakeTeam';
import TeamBox from '../../components/Meeting22/TeamBox/TeamBox';
import LoginPopUp from '../../components/Meeting22/LoginPopUp/LoginPopUp';
import { getTeamGallery } from 'api/Meeting/GetTeamGallery';
import { getOurTeam } from '../../api/Meeting/GetourTeam';
import {
  NonLoginDataTwoToTwo,
  NonLoginDataThreeToThree,
  NonLoginDataOneToOne,
} from '../../data/NonLoginData';
import { OurTeamType } from '../../recoilStores/type/Meeting/ourTeamType';
import MeetingRandomMain from '../../components/MeetingRandom/MeetingRandomMain';
import NonLogInMeeting from '../../pages/NonMember/Meeting/Meeting';
import { getOnetoOneGallery } from 'api/Meeting/GetOneToOneGallery';
import { getmyProfile } from 'api/Meeting/GetMyprofile';
import { MyProfileType } from 'recoilStores/type/Meeting/MyProfile';
import UserBox from '../../components/Meeting22/TeamBox/UserBox';
import { MyProfileState } from '../../recoilStores/state/Meeting/MyProfileState';
import { track } from '@amplitude/analytics-browser';

const Meeting22 = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('accessToken') ? true : false;
  const [teamGalleryData, setTeamGalleryData] = useState<any | null>(null);
  const [UserGalleryData, setUserGalleryData] = useState<any | null>(null);
  const [teamType, setTeamType] = useState<string>('ONE_TO_ONE');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ourTeamData, setOurTeamData] = useState<OurTeamType | null>(null);
  const [myProfileData, setMyProfileData] =
    useRecoilState<MyProfileType | null>(MyProfileState);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (isLoggedIn && teamType === 'TWO_TO_TWO') {
          const data = await getTeamGallery(teamType, 0);
          setTeamGalleryData(data?.data.teamList || []);
        } else if (isLoggedIn && teamType === 'ONE_TO_ONE') {
          const data = await getOnetoOneGallery(0);
          setUserGalleryData(data?.data.userList || []);
        } else {
          if (!isLoggedIn && teamType === 'TWO_TO_TWO') {
            setTeamGalleryData(NonLoginDataTwoToTwo);
          } else if (!isLoggedIn && teamType === 'THREE_TO_THREE') {
            setTeamGalleryData(NonLoginDataThreeToThree);
          } else if (!isLoggedIn && teamType === 'ONE_TO_ONE') {
            setUserGalleryData(NonLoginDataOneToOne);
          }
        }
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchOurTeamData = async () => {
      try {
        if (isLoggedIn && teamType === 'ONE_TO_ONE') {
          const data = await getmyProfile();
          setMyProfileData(data?.data ?? null);
        } else if (isLoggedIn && teamType !== 'Random') {
          const response = await getOurTeam(teamType);
          setOurTeamData(response?.data || null);
        } else {
          if (teamType === 'TWO_TO_TWO') {
            setOurTeamData(null);
          } else if (teamType === 'THREE_TO_THREE') {
            setOurTeamData(null);
          } else if (teamType === 'ONE_TO_ONE') {
            setOurTeamData(null);
          }
        }
      } catch (error: any) {
        console.error('❌ 우리팀 데이터 가져오기 실패:', error);
        setOurTeamData(null);
      }
    };

    fetchData();
    fetchOurTeamData();
  }, [teamType, isLoggedIn]);

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <NavigationBar />
      {!isLoggedIn && teamType !== 'Random' && (
        <LoginPopUp onClose={handleLogin} />
      )}
      <S.Meeting22Layout>
        <S.Meeting22Title>미팅</S.Meeting22Title>
        <TypeButton setSelectedTeamType={setTeamType} />
        <S.Meeting22Container>
          {teamType !== 'Random' ? (
            <>
              <MakeTeam teamType={teamType} ourTeamData={ourTeamData} />
              {isLoading ? (
                <S.LoadingContainer />
              ) : teamType === 'ONE_TO_ONE' ? (
                <UserBox userData={UserGalleryData} teamType={teamType} />
              ) : (
                <TeamBox
                  teamData={teamGalleryData}
                  ourTeamData={ourTeamData}
                  teamType={teamType}
                />
              )}
            </>
          ) : isLoggedIn ? (
            <MeetingRandomMain />
          ) : (
            <NonLogInMeeting />
          )}
        </S.Meeting22Container>
      </S.Meeting22Layout>
    </>
  );
};

export default Meeting22;
