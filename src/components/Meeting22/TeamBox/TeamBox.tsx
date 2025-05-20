import React from 'react';
import Team from '../Team/Team'; 
import * as S from './Styles'; 
import { TeamType } from '../../../recoilStores/type/Meeting/teamGallery';

interface TeamBoxProps {
  teamData?: TeamType[]; 
  ourTeamData: any | null;
  teamType: string;
}

const TeamBox: React.FC<TeamBoxProps> = ({ teamData, ourTeamData, teamType }) => {
   return (
    <S.TeamBoxLayOut>
      {teamData?.map((team) => (
        <Team key={team.teamId} team={team} ourTeamData={ourTeamData} teamType={teamType}/>
      ))}
    </S.TeamBoxLayOut>
  );
};

export default TeamBox;
