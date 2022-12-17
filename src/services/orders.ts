import axios, { url } from './config';
    

export const RETRIEVE_ORDERS = async (query: string = '') => {
    let uri: string = `${url}/orders/${query}`;
    return axios.get(uri);
}

export const CREATE_ORDER = async (data: any) => {
    let uri: string = `${url}/orders`;
    return axios.post(uri, data)
}

export const ORDERS_OPERATION = async (id: string, data: any) => {
    let uri: string = `${url}/orders/operation/${id}`;
    return axios.put(uri, data);
}
export const UPDATE_ORDER = async (id: string, data: any) => {
    let uri: string = `${url}/orders/${id}`;
    return axios.put(uri, data);
}

export const DELETE_ORDER = async (id: string) => {
    let uri: string = `${url}/orders/${id}`;
    return axios.delete(uri);
}
