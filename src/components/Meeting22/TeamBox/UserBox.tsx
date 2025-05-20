import React from 'react'; 
import * as S from './Styles'; 
import { UserType } from 'recoilStores/type/Meeting/OnetoOneGalleryType';
import UserProfile from '../UserProfile/UserProfile'; 

interface UserBoxProps {
  userData?: UserType[];
  teamType: string;
}

const UserBox: React.FC<UserBoxProps> = ({  teamType, userData }) => {
  return (
    <S.TeamBoxLayOut>
      {userData?.map((user) => (
        <UserProfile key={user.userId} userData={user}  teamType={teamType}/>
      ))}
    </S.TeamBoxLayOut>
  );
};

export default UserBox;
