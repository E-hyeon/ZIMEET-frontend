import { privateAxios } from '../axiosConfig';
import { UserDetailResponseType } from '../../recoilStores/type/Meeting/UserDetail'; 

export const getOnetoOneDetail = async (
  profileId: number
): Promise<UserDetailResponseType | null> => {
  try {
    const { data } = await privateAxios.get<UserDetailResponseType>(`/meeting/ONE_TO_ONE/${profileId}`);
    return data; 
  } catch (error) {
    console.error('Error fetching one to one detail data:', error);
    return null; 
  }
};