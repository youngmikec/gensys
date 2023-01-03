import axios, { url } from './config';

export const RETRIEVE_USERS = async () => {
  return axios.get(`${url}/users`);
};

export const USER_LOGIN = async (data: any) => {
  return axios.post(`${url}/users/login`, data);
};

export const USER_SIGNUP = async (data: any) => {
  return axios.post(`${url}/users/register`, data);
};

export const USER_ACCOUNT_VERIFY = async (data: any) => {
  return axios.post(`${url}/users/verify`, data);
};

export const VERIFY_ACCOUNT = async (data: any) => {
  return axios.post(`${url}/users/verify`, data);
};

export const ADMIN_LOGIN = async (data: any) => {
  return axios.post(`${url}/admin/login`, data);
};

export const RETRIEVE_USER_BY_ID = async (id: string) => {
  return axios.get(`${url}/users/?_id=${id}`);
};


export const UPDATE_USER_BY_ADMIN = async (id: string, data: any) => {
  const payload = { ...data };
  return axios.post(`${url}/user/admin/${id}`, payload, {
    headers: {},
  });
};

export const UPDATE_USER_BY_SELF = async (data: any) => {
  const payload = { ...data };
  return axios.post(`${url}/user/me`, payload, {
    headers: {},
  });
};

export const VERIFY_EMAIL = async (payload: any) => {
  return axios.post(`${url}/users/verify`, payload);
};

export const VERIFY_RESETCODE = async (payload: any) => {
  return axios.post(`${url}/users/resetCode/verify`, payload);
};

export const RETRIEVE_USER_PROFILE = async () => {
  return axios.get(`${url}/users/me`);
};

export const USER_PROFILE_VERIFY = async (data: FormData) => {
  return axios.post(`${url}/profile/verify`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const DELETE_USER = async (id: string = '') => {
  return axios.delete(`${url}/user/${id}`);
};
