import axios, {AxiosInstance} from 'axios';
import {Path} from '@/core/constants/enums';
import {toast} from '@/core/utils/toast';
import {tokenObj} from '@/core/utils/token';

type constructorType = {
    suffix?: string;
    baseUrl?: string;
};

class BaseApi {
    protected $axios: AxiosInstance;

    constructor({
                    suffix,
                    baseUrl = process.env.REACT_APP_DEV_APP_BASE_URL,
                }: constructorType) {
        this.$axios = axios.create({
            baseURL: `${baseUrl}${suffix ? `/${suffix}` : ''}`,
        });
        this.requestInterceptors();
        this.responseInterceptors();
    }

    requestInterceptors() {
        this.$axios.interceptors.request.use(
            (config) => {
                const token = tokenObj.getAccessToken();
                if (token && config.headers) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                Promise.reject(error);
            }
        );
    }

    responseInterceptors() {
        this.$axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                const RES400 = error?.response?.status === 400 || false;
                const RES401 = error?.response?.status === 401 || false;
                const RES403 = error?.response?.status === 403 || false;
                const RES404 = error?.response?.status === 404 || false;
                const RES409 = error?.response?.status === 409 || false;
                const RES422 = error?.response?.status === 422 || false;
                const RES500 = error?.response?.status >= 500 || false;

                if (RES401) {
                    toast.error({message: error?.response?.data?.result.data.detail})
                    const refreshToken = tokenObj.getRefreshToken();
                    if (!refreshToken) {
                        if (!window.location.pathname.startsWith(Path.SignIn))
                            window.location.replace(Path.SignIn);
                        return null;
                    }
                    return this.$axios
                        .post(
                            'https://bistiapi.webcentriq.com/api/v1/bisti-admin/signin/refresh/',
                            {
                                refresh: refreshToken,
                            }
                        )
                        .then((res) => {
                            if (res.status === 200) {
                                const originalRequest = error.config;
                                tokenObj.setAccessToken(res.data.result.access);
                                this.$axios.defaults.headers.common.Authorization = `Bearer ${tokenObj.getAccessToken()}`;
                                return this.$axios(originalRequest);
                            } else {
                                tokenObj.removeToken();
                                toast.error({message: error?.response?.data?.result.data.refresh})
                                window.location.replace(Path.SignIn);
                            }
                            return null;
                        });
                }

                if (RES422) {
                    toast.error({message: error?.response?.data.message})
                    throw error;
                }

                if (RES404) {
                    toast.error({message: error?.response?.data.message})
                    throw error;
                }

                if (RES403) {
                    // tokenObj.removeToken();
                    // location.replace(Path.SignIn);

                    // tokenObj.removeToken();
                    // location.replace(Path.SignIn);
                    toast.error({message: error?.response?.data.message})

                    throw error;
                }

                if (RES409) {
                    toast.error({message: error?.response?.data.message})
                    throw error;
                }

                if (RES400) {
                    toast.error({message: error?.response?.data.message})
                    throw error;
                }
                if (RES500) {
                    toast.error({message: error?.response?.data.message})
                    throw error;
                }

                if (!error.response) {
                    toast.error({message: 'Check your network please!'})
                    throw error;
                }

                return Promise.reject(error);
            }
        );
    }
}

export default BaseApi;
