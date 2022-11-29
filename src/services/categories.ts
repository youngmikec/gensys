import axios from './config';
// axios.defaults.withCredentials = true;

// const url = process.env.REACT_APP_BASE_URL;
const url = "http://localhost:3000/api";
    

export const RETRIEVE_CATEGORIES = async (query: string = '') => {
    let uri: string = `${url}/categories/${query}`;
    return axios.get(uri);
}

export const CREATE_CATEGORY = async (data: any) => {
    let uri: string = `${url}/categories`;
    return axios.post(uri, data)
}

export const UPDATE_CATEGORY = async (id: string, data: any) => {
    let uri: string = `${url}/categories/${id}`;
    return axios.patch(uri, data);
}

export const DELETE_CATEGORY = async (id: string) => {
    let uri: string = `${url}/categories/${id}`;
    return axios.delete(uri);
}
