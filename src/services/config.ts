import axios from 'axios';
import { getItem } from '../utils';

const token = getItem('clientToken');
// axios.defaults.baseURL = "https://generate-api.onrender.com/api";
// axios.defaults.baseURL = "http://localhost:3000/api";
export const url: string = 'https://generate-api.onrender.com/api';
axios.defaults.baseURL = url;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = `application/json`;
export default axios;