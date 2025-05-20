import React, {useEffect, useState} from 'react';
import * as S from './Styles';
import { TeamType } from '../../../recoilStores/type/Meeting/teamGallery';
import { getImageByEmoji } from 'utils/IconMapper';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/TeamToast/Toast';
import { mappingMusic } from '../../../data/SignUpData';
import { track } from '@amplitude/analytics-browser';

interface TeamProps {
  team: TeamType;
  ourTeamData: any | null;
  teamType: string;
}

const Team: React.FC<TeamProps> = ({ team, ourTeamData, teamType }) => {
  const navigate = useNavigate();
  const [isToastOpen, setIsToastOpen] = useState(false);

  if (!team) {
    return <div>팀 정보가 없습니다.</div>; 
  }
  
  const isVerified = team.verification === 1;

  //전공이 배열인경우 구분자 추가
  const majorDisplay = Array.isArray(team.major)
  ? team.major.join('/') 
  : team.major;

  const handleTeamClick = () => {
    if (!ourTeamData) {
      setIsToastOpen(true);
      return;
    }
    track('[클릭]미팅_이성팀');
    navigate(`/teamintro/${team.teamId}`, { state: { teamType , from: "meeting"} });
  };

  return (
    <>
    <S.TeamLayOut onClick={handleTeamClick}>
      <S.EmojiContainer>
        {team.emoji.map((emoji, index) => (
          <S.MemberItem1 key={index}>
            <img src={getImageByEmoji(emoji)} alt={emoji} />
          </S.MemberItem1>
        ))}
      </S.EmojiContainer>
      <S.NameContainer>
        <S.TeamNameBox>
          {team.name}
        </S.TeamNameBox>
        <S.MajorBox>
        {isVerified && <S.CertificationIcon/>}<S.MajorDisplay>{majorDisplay} | {team.age}세</S.MajorDisplay>
        </S.MajorBox>
      </S.NameContainer>
      <S.MemberInfo>
        {team.music.length === 1 && (
          <S.MemberItem2 width="65%">
            {mappingMusic(team.music[0])}
          </S.MemberItem2>
        )}
        {team.music.length === 2 && (
          <>
            <S.MemberItem2 width="35%">
              {mappingMusic(team.music[0])}
            </S.MemberItem2>
            <S.MemberItem2 width="35%">
              {mappingMusic(team.music[1])}
            </S.MemberItem2>
          </>
        )}
        {team.music.length === 3 && (
          <S.MemberItem2 width="65%">
            {mappingMusic(team.music[0])}, {mappingMusic(team.music[1])} 외
          </S.MemberItem2>
        )}
      </S.MemberInfo>
    </S.TeamLayOut>
    <Toast isOpen={isToastOpen} onClose={() => setIsToastOpen(false)}/>
    </>
  );
};

export default Team;
