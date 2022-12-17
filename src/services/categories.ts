import axios, { url } from './config';

    

export const RETRIEVE_CATEGORIES = async (query: string = '') => {
    let uri: string = `${url}/categories/${query}`;
    return axios.get(uri);
}
export const RETRIEVE_CATEGORIES_PUBLIC = async (query: string = '') => {
    let uri: string = `${url}/categories/public/${query}`;
    return axios.get(uri);
}

export const CREATE_CATEGORY = async (data: any) => {
    let uri: string = `${url}/categories`;
    return axios.post(uri, data)
}

export const UPDATE_CATEGORY = async (id: string, data: any) => {
    let uri: string = `${url}/categories/${id}`;
    return axios.put(uri, data);
}

export const DELETE_CATEGORY = async (id: string) => {
    let uri: string = `${url}/categories/${id}`;
    return axios.delete(uri);
}
