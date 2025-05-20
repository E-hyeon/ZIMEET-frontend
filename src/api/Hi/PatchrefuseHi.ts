import { privateAxios } from '../axiosConfig';

interface RefuseHiRequest {
    toId?: number;
    fromId?: number;
    type? : string;
}

const patchrefuseHi = async (data: RefuseHiRequest) => {
    try {
        const response = await privateAxios.patch('/meeting/hi/refuse', data);
        return response.data;
    } catch (error) {
        console.error('Error refusing hi:', error);
        throw error;
    }
};

export default patchrefuseHi;

