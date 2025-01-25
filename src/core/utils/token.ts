import {ls} from '@/core/utils/localStorage';

export type Login_Type = {
    refresh: string;
    access: string;
};

export const tokenObj = {
    setAccessToken(token: string) {
        ls.set('access_token', token);
    },
    getAccessToken() {
        return ls.get('access_token');
    },
    setRefreshToken(token: string) {
        ls.set('refresh_token', token);
    },
    getRefreshToken() {
        return ls.get('refresh_token');
    },
    setToken(token: Login_Type) {
        const options = {path: '/'};
        this.setAccessToken(token.access);
        this.setRefreshToken(token.refresh);
    },
    removeToken() {
        ls.remove('access_token');
        ls.remove('refresh_token');
    },
};
