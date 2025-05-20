import { privateAxios } from '../axiosConfig';
import { MyProfileResponseType } from 'recoilStores/type/Meeting/MyProfile';


export const getmyProfile = async (): Promise<MyProfileResponseType | null> => {
  try {
    const { data } = await privateAxios.get<MyProfileResponseType>(`/meeting/myProfile`);
    return data; 
  } catch (error) {
    console.error('Error fetching my profile data', error);
    return null; 
  }
};