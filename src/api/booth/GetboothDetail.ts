import { publicAxios } from '../axiosConfig';
import { BoothDetailResponseType } from '../../recoilStores/type/booth';


export const GetboothDetail = async (clubId: number): Promise<BoothDetailResponseType | null> => {
  try {
    const { data } = await publicAxios.get<BoothDetailResponseType>(`/booths/detail/${clubId}`);
    return data;
  } catch (error) {
    console.error('Error fetching booth detail data:', error);
    return null;
  }
};