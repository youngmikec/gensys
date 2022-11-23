import axios from "./config";
// axios.defaults.withCredentials = true;

const url = process.env.REACT_APP_BASE_URL;

export const RETRIEVE_USERS_TRANSACTIONS = async () => {
  return axios.get(`${url}/user/transactions`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const RETRIEVE_ALL_DEPOSITS = async () => {
  return axios.get(`${url}/transactions?type=deposit`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const RETRIEVE_ALL_WITHDRAWALS = async () => {
  return axios.get(`${url}/transactions?type=withdrawal`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const RETRIEVE_ALL_TRANSACTIONS = async () => {
  return axios.get(`${url}/transactions`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const RETRIEVE_SINGLE_TRANSACTIONS = async (id: string) => {
  return axios.get(`${url}/transactions/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const RETRIEVE_APPROVED_TRANSACTIONS = async () => {
  return axios.get(`${url}/approved-transactions`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
