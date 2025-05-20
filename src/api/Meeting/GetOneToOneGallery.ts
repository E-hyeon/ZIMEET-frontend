import { privateAxios } from '../axiosConfig';
import { OnetoOneGalleryResponseType } from '../../recoilStores/type/Meeting/OnetoOneGalleryType'; 

export const getOnetoOneGallery = async (
  page: number
): Promise<OnetoOneGalleryResponseType | null> => {
  try {
    const { data } = await privateAxios.get<OnetoOneGalleryResponseType>('/meeting/ONE_TO_ONE', {
      params: {
        page,     
      },
    });
    return data; 
  } catch (error) {
    console.error('Error fetching one to one gallery data:', error);
    return null; 
  }
};