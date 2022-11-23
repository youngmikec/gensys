import axios from './config';
// axios.defaults.withCredentials = true;

const url = process.env.REACT_APP_BASE_URL;
    

export const RETRIEVE_USERS_DEPOSITS = async (email: string = '') => {
    let uri: string = `${url}/user/deposits`;
    if(email !== '' || undefined) uri += `&email=${email}`;
    return axios.get(uri, {headers : {
        'Content-Type' : 'application/json'
    }})
}

export const RETRIEVE_APPROVED_DEPOSITS = async () => {
    return axios.get(`${url}/approved-deposits`, {headers : {
        'Content-Type' : 'application/json'
    }})
}

export const UPDATE_DEPOSIT = async (data: {id: string, status: string}) => {
    return axios.patch(`${url}/admine/update-deposit/${data.id}?status=${data.status}`, {headers : {
        'Content-Type' : 'application/json'
    }})
}

export const CONFIRM_DEPOSIT = async (data: FormData, id: string) => {
    return axios.post(
        `${url}/confirm-deposit/${id}`,
        data,
        {
            headers: { "Content-Type": "multipart/form-data" },
        }
    );
}
