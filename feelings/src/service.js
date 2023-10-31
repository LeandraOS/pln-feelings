import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const status = async () => {
    const response = api.get('/status/');
    return response.data
}

export const getSentiment = async (data) => {
    const response = api.post('/sentiment/', data);
    return (await response).data
}