import axios from './config';
// axios.defaults.withCredentials = true;

const url = process.env.REACT_APP_BASE_URL;
    

export const RETRIEVE_USERS_WITHDRAWALS = async (email: string = '') => {
    let uri: string = `${url}/user/withdrawals`;
    if(email !== '' || undefined) uri += `&email=${email}`;
    return axios.get(uri, {headers : {
        'Content-Type' : 'application/json'
    }})
}

export const RETRIEVE_APPROVED_WITHDRAWALS = async () => {
    return axios.get(`${url}/approved-withdrawals`, {headers : {
        'Content-Type' : 'application/json'
    }})
}
export const UPDATE_WITHDRAWALS = async (data: {id: string, status: string}) => {
    return axios.patch(`${url}/admine/update-withdrawal/${data.id}?status=${data.status}`, data, {headers : {
        'Content-Type' : 'application/json'
    }})
}
