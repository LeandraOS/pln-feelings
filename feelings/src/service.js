import axios from "axios";

const api = axios.create({
  baseURL: 'https://54.227.114.79.nip.io',
});

export const status = async () => {
    const response = api.get('/status/');
    return response.data
}

export const getSentiment = async (data) => {
    const response = api.post('/sentiment/', data);
    return (await response).data
}