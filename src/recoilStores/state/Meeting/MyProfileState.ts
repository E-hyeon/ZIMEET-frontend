import { atom } from 'recoil';
import { MyProfileType } from '../../type/Meeting/MyProfile';

//1대1 미팅 마이 프로필 상태 
export const MyProfileState = atom<MyProfileType | null>({
    key: 'MyProfileState',
    default: null,
});