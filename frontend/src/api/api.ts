import Axios, {AxiosRequestConfig, AxiosRequestHeaders} from 'axios';
import {DOMAIN} from "../constants/api";
import {NotificationsStore} from "../mobx/notifications";

let headers: AxiosRequestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
};

function authRequestInterceptor(config: AxiosRequestConfig) {
    config.headers = headers
    return config;
}

export const api = Axios.create({
    baseURL: DOMAIN,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        const message = error.response?.data?.message || error.message;

        console.log('interceptors error ', message)

        NotificationsStore.showMessage({
            type: 'error',
            message
        })

        return Promise.reject(error);
    }
);
