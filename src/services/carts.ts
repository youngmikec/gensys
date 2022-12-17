import axios, { url } from './config';

    

export const RETRIEVE_CARTS = async (query: string = '') => {
    let uri: string = `${url}/carts/${query}`;
    return axios.get(uri);
}
export const RETRIEVE_CARTS_PUBLIC = async (query: string = '') => {
    let uri: string = `${url}/carts/public/${query}`;
    return axios.get(uri);
}

export const CREATE_CART_BY_USER = async (data: any) => {
    let uri: string = `${url}/carts/user`;
    return axios.post(uri, data)
}
export const CREATE_CART = async (data: any) => {
    let uri: string = `${url}/carts`;
    return axios.post(uri, data)
}

export const UPDATE_CART_BY_USER = async (id: string, data: any) => {
    let uri: string = `${url}/carts/user/${id}`;
    return axios.put(uri, data);
}

export const UPDATE_CART = async (id: string, data: any) => {
    let uri: string = `${url}/carts/${id}`;
    return axios.put(uri, data);
}

export const DELETE_CART = async (id: string) => {
    let uri: string = `${url}/carts/${id}`;
    return axios.delete(uri);
}
