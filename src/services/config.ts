import axios from 'axios';
import { getItem } from '../utils';

const token = getItem('clientToken');
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
axios.defaults.headers.common['Content-Type'] = `application/json`;
export default axios;