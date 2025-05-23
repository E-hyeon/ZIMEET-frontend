import React, { useEffect, useState } from 'react';
import * as S from './Styles';
import PeoplePlusButton from '../Buttons/PlusButton/PeoplePlusButton';
import MyProfile from '../../Common/Profile/MyProfile';
import { getmyProfile } from 'api/Mypage/GetmyProfile';
import { MyProfileType } from 'recoilStores/type/MyPage/MyProfileType';
import { TeamMemberWithProfileType } from 'recoilStores/type/TeamMaking/TeamMemberWithProfileType';
import { SearchTeamMemberType } from 'recoilStores/type/TeamMaking/SearchTeamMember';
import { getuserProfile } from 'api/TeamMaking/GetUserProfile';

interface TeamsProps {
  teamMembersInfo: TeamMemberWithProfileType[];
  setTeamMembersInfo: React.Dispatch<
    React.SetStateAction<TeamMemberWithProfileType[]>
  >;
  teamType: string;
}

const Teams: React.FC<TeamsProps> = ({
  teamMembersInfo,
  setTeamMembersInfo,
  teamType,
}) => {
  const [teamMembers, setTeamMembers] =
    useState<SearchTeamMemberType[]>(teamMembersInfo);
  const [MyProfileData, setMyProfileData] = useState<MyProfileType | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 내 정보
  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const response = await getmyProfile();
        if (response) {
          setMyProfileData({
            ...response.data,
          });
        } else {
          setMyProfileData(null);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setMyProfileData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyProfile();
  }, []);

  // 팀원 정보
  useEffect(() => {
    const fetchTeamMemberProfiles = async () => {
      try {
        if (teamMembers.length > 0) {
          const membersWithProfiles: TeamMemberWithProfileType[] =
            await Promise.all(
              teamMembers.map(async (member) => {
                const response = await getuserProfile(member.nickname);
                return {
                  ...member,
                  studentNumber: response?.data.studentNumber || '',
                  gender: response?.data.gender || '',
                  emoji: response?.data.emoji || '',
                  age: response?.data.age || 0,
                  mbti: response?.data.mbti || '',
                  style: response?.data.style ?? '',
                  idealType: response?.data.idealType ?? '',
                  idealAge: response?.data.idealAge ?? '',
                  music: response?.data.music ?? '',
                };
              }),
            );

          setTeamMembersInfo(membersWithProfiles);
        }
      } catch (error) {
        console.error('Error fetching team member profiles:', error);
      }
    };

    fetchTeamMemberProfiles();
  }, [teamMembers]);

  //3대3일경우 팀원 추가
  const maxTeamMembers = teamType === 'THREE_TO_THREE' ? 2 : 1;
  const isPremium = MyProfileData?.level === 'PLUS'? true : false;
  return (
    <S.TeamLayout>
      <S.TeamContainer>
        <S.Title>내 프로필</S.Title>
        <S.Description>
          나는 상대에게 이렇게 보여요,프로필은 마이에서 편집할 수 있어요.
        </S.Description>
        {MyProfileData ? (
          <MyProfile
            profileData={MyProfileData}
            studentNum={MyProfileData.studentNumber.slice(2,4)}
            gender={MyProfileData.gender}
            isTeamMaking={true}
            isPremium={true}
          />
        ) : null}
        <S.Title>팀원</S.Title>
        {teamMembersInfo.map((member: TeamMemberWithProfileType) => (
          <MyProfile
            key={member.userId}
            profileData={member}
            studentNum = {member.studentNumber.slice(2,4)}
            gender={member.gender}
            isTeamMaking={true}
            isPremium={true}
          />
        ))}
        {teamMembers.length < maxTeamMembers && (
          <PeoplePlusButton
            teamMembers={teamMembers}
            setTeamMembers={setTeamMembers}
            teamType={teamType}
          />
        )}
      </S.TeamContainer>
    </S.TeamLayout>
  );
};

export default Teams;
