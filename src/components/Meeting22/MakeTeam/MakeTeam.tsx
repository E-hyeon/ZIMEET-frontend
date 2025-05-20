import React, { useEffect } from 'react';
import * as S from './Styles';
import ViewMore from '../ViewMore/ViewMore';
import { useNavigate } from 'react-router-dom';
import { OurTeamType } from 'recoilStores/type/Meeting/ourTeamType';
import { getImageByEmoji } from 'utils/IconMapper';
import { MyProfileType } from 'recoilStores/type/Meeting/MyProfile';
import { track } from '@amplitude/analytics-browser';
import patchJoin1to1 from 'api/Meeting/PatchJoin1to1';
import { getmyProfile } from 'api/Meeting/GetMyprofile';
import { useRecoilState } from 'recoil';
import { MyProfileState } from 'recoilStores/state/Meeting/MyProfileState';

interface MakeTeamProps {
  ourTeamData?: OurTeamType | null;
  teamType: string;
}

const MakeTeam: React.FC<MakeTeamProps> = ({ ourTeamData, teamType }) => {
  const navigate = useNavigate();
  const [myProfileData, setMyProfileData] =
    useRecoilState<MyProfileType | null>(MyProfileState);

  const handleCreateTeam = () => {
    navigate('/teamMaking', { state: { teamType } });
    if (teamType === 'TWO_TO_TWO') {
      track('[클릭]미팅_팀만들기버튼_2대2');
    } else if (teamType === 'THREE_TO_THREE') {
      track('[클릭]미팅_팀만들기버튼_3대3');
    }
  };

  const handleMyInfo = () => {
    navigate(`/profile1to1/${myProfileData?.userId}`, {
      state: { from: 'profile1to1' },
    });
    track('[클릭]미팅_1대1참여');
  };

  //1대1 참여
  const handleJoin1to1 = async () => {
    try {
      const response = await patchJoin1to1({ status: 'ACTIVE' });
      if (response.code !== 'COMMON200') {
        alert('1대1 참여를 못했어요 ㅜ 다시 시도해주세요.');
        return;
      }

      const profileRes = await getmyProfile();
      setMyProfileData(profileRes?.data ?? null);

      track('[클릭]미팅_1대1참여하기');
    } catch (error) {
      alert('1대1 참여를 못했어요 ㅜ.ㅜ 다시 시도해주세요');
    }
  };

  const handleDetailPage = () => {
    if (teamType === 'TWO_TO_TWO') {
      track('[클릭]미팅_내팀보기버튼_2대2');
    } else if (teamType === 'THREE_TO_THREE') {
      track('[클릭]미팅_내팀보기버튼_3대3');
    } else if (teamType === 'ONE_TO_ONE') {
      track('[클릭]미팅_내팀보기버튼_1대1');
    }
    navigate('/ourteamintro', { state: { teamType } });
  };

  return (
    <S.CreateTeamLayOut>
      {teamType === 'ONE_TO_ONE' ? (
        !myProfileData ? (
          <S.CreateTeamButton onClick={handleJoin1to1}>
            1대1 참여하기
          </S.CreateTeamButton>
        ) : (
          <S.CreateTeamBox>
            <S.TeamBox>
              {myProfileData ? (
                <S.Emoji>
                  <img
                    src={getImageByEmoji(myProfileData.emoji)}
                    alt={myProfileData.emoji}
                  />
                </S.Emoji>
              ) : null}
              <S.TeamName>{myProfileData.nickname} (나)</S.TeamName>
            </S.TeamBox>
            <ViewMore onClick={handleMyInfo} teamType={teamType} />
          </S.CreateTeamBox>
        )
      ) : !ourTeamData ? (
        <S.CreateTeamButton onClick={handleCreateTeam}>
          팀 만들기
        </S.CreateTeamButton>
      ) : (
        <S.CreateTeamBox>
          <S.TeamBox>
            {ourTeamData?.emoji.map((emoji, index) => (
              <S.Emoji key={index}>
                <img src={getImageByEmoji(emoji)} alt={emoji} />
              </S.Emoji>
            ))}
            <S.TeamName>{ourTeamData.name} (우리팀)</S.TeamName>
          </S.TeamBox>
          <ViewMore onClick={handleDetailPage} teamType={teamType} />
        </S.CreateTeamBox>
      )}
    </S.CreateTeamLayOut>
  );
};

export default MakeTeam;
