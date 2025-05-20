import { stat } from 'fs';
import { privateAxios } from '../axiosConfig';

interface Join1to1Request {
    status: string;
}

const patchJoin1to1 = async (data: Join1to1Request) => {
    try {
        const response = await privateAxios.patch('/meeting/ONE_TO_ONE', data);
        return response.data;
    } catch (error) {
        console.error('Error join one to one:', error);
        throw error;
    }
};

export default patchJoin1to1;

