import axios from 'axios';
import { getItem } from '../utils';

const token = getItem('clientToken');
// export const url: string = 'https://generate-api.onrender.com/api';
export const url: string | undefined = process.env.REACT_APP_BASE_URL;
// export const url: string = "http://localhost:3000/api";
axios.defaults.baseURL = url;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = `application/json`;
export default axios;