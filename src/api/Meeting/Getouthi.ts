import { privateAxios } from '../axiosConfig';
   
export interface HiResponseType {
status: string;
code: string;
message: string;
data: {
    hi: number;
    };
};

export const getOurHi = async (
  teamType: string
): Promise<HiResponseType | null> => {
  try {
    const { data } = await privateAxios.get<HiResponseType>('/meeting/myTeam/hi', {
      params: {
        teamType  
      },
    });
    return data; 
  } catch (error) {
    console.error('Error fetching Team Hi data:', error);
    return null; 
  }
};

export const getOnetoOneHi = async (): Promise<HiResponseType | null> => {
  try {
    const { data } = await privateAxios.get<HiResponseType>('/meeting/myProfile/hi');
    return data; 
  } catch (error) {
    console.error('Error fetching one to one Hi data:', error);
    return null; 
  }
}