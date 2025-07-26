import axios, { AxiosInstance as AxiosType } from 'axios';
import { AxiosTimeout, BASE_URL } from '../../Utils/constants';

export const axiosInstance: AxiosType = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: AxiosTimeout,
    maxBodyLength: Infinity,
});
