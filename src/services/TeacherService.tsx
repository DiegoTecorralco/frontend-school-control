import axios from 'axios';

const api_url = "http://localhost:3000/api/teachers";

export const getAllTeachers = async (): Promise<any> => {
    const response = await axios.get(`${api_url}/getAll`);
    return response.data;
}

export const getOneTeacher = async (id: string): Promise<any> => {
    const response = await axios.get(`${api_url}/getOne/${id}`);
    return response.data.data;
}

export const insertTeacher = async (teacher: any): Promise<any> => {
    const response = await axios.post(`${api_url}/insert`, teacher);
    return response.data;
}

export const updateTeacher = async (id: string, teacher: any): Promise<any> => {
    const response = await axios.put(`${api_url}/update/${id}`, teacher);
    return response.data;
}

export const deleteTeacher = async (id: string): Promise<any> => {
    const response = await axios.delete(`${api_url}/delete/${id}`);
    return response.data;
}
