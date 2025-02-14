import { httpClient } from "../config/AxiosHelper";

export const createRoomApi = async (roomdetail) =>{
    const response = await httpClient.post(`/api/v1/rooms`,roomdetail,{
        headers: {
            'Content-Type': 'text/plan',
        },
    });
    return response.data;
};

export const joinChatApi = async (roomId) => {
    const response = await httpClient.post(`/api/v1/rooms/${roomId}`);
    return response.data;
};

export const getMessagess = async (roomId,size = 50,page = 0) =>{
    const response = await httpClient.get(`/api/v1/rooms/${roomId}/messages?${size}&page=${page}`);
    return response.data;
};