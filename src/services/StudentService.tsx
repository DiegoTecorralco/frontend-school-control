import axios from 'axios';

const api_url= "http://localhost:5000/api/students";

export const getAllStudents = async() => {
    const response= await axios.get(`${api_url}/getAll`);
    return response.data.data;
}

export const getOneStudent = async(id) => {
    const response= await axios.get(`${api_url}/getOne/${id}`);
    return response.data.data;
}

export const insetStudent = async() => {
    const response= await axios.post(`${api_url}/getAll`);
    return response.data;
}

export const updateStudent = async() => {
    const response= await axios.put(`${api_url}/getAll`);
    return response.data;
}

export const deleteStudent = async() => {
    const response= await axios.delete(`${api_url}/getAll`);
    return response.data;
}