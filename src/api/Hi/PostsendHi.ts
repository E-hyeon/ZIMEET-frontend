import { privateAxios } from '../axiosConfig';

interface sendHiRequest {
    toId: number;
    fromId: number;
    type?: string;
}

export const postsendHi = async (data: sendHiRequest) => {
    try {
        const response = await privateAxios.post('/meeting/hi/send', data);
        return response.data;
    } catch (error) {
        console.error('Error send hi:', error);
        throw error;
    }
};

export default postsendHi;

