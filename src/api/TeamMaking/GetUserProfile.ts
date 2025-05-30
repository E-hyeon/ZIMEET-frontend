import { privateAxios } from '../axiosConfig';
import { UserResponseType } from '../../recoilStores/type/TeamMaking/UserType';


export const getuserProfile = async (
  nickname: string 
): Promise<UserResponseType | null> => {
  try {
    const { data } = await privateAxios.get<UserResponseType>(`/user/profile/${nickname}`);
    return data; 
  } catch (error) {
    console.error('Error fetching searchMember data:', error);
    return null; 
  }
};