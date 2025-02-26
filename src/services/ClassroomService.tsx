import axios from 'axios';

const api_url = "http://localhost:3000/api/classrooms";

export const getAllClassrooms = async (): Promise<any> => {
    const response = await axios.get(`${api_url}/getAll`);
    return response.data;
}

export const getOneClassroom = async (id: string): Promise<any> => {
    const response = await axios.get(`${api_url}/getOne/${id}`);
    return response.data.data;
}

export const insertClassroom = async (classroom: any): Promise<any> => {
    const response = await axios.post(`${api_url}/insert`, classroom);
    return response.data;
}

export const updateClassroom = async (id: string, classroom: any): Promise<any> => {
    const response = await axios.put(`${api_url}/update/${id}`, classroom);
    return response.data;
}

export const deleteClassroom = async (id: string): Promise<any> => {
    const response = await axios.delete(`${api_url}/delete/${id}`);
    return response.data;
}
