import axios, { url } from './config';
    

export const RETRIEVE_PRODUCTS = async (query: string = '') => {
    let uri: string = `${url}/products/${query}`;
    return axios.get(uri);
}

export const RETRIEVE_PUBLIC_PRODUCTS = async (query: string = '') => {
    let uri: string = `${url}/products/public${query}`;
    return axios.get(uri, {});
}

export const CREATE_PRODUCT = async (data: any) => {
    let uri: string = `${url}/products`;
    return axios.post(uri, data)
}

export const UPDATE_PRODUCT = async (id: string, data: any) => {
    let uri: string = `${url}/products/${id}`;
    return axios.put(uri, data);
}

export const DELETE_PRODUCT = async (id: string) => {
    let uri: string = `${url}/products/${id}`;
    return axios.delete(uri);
}
