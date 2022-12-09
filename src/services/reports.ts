import axios from './config';
// axios.defaults.withCredentials = true;

const url = "https://generate-api.onrender.com/api";
// const url = "http://localhost:3000/api";
    

export const RETRIEVE_APP_REPORTS = async () => {
    let uri: string = `${url}/reports/`;
    return axios.get(uri);
}