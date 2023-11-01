/* eslint-disable no-undef */
import {API_AUTH, USER_PROFILE} from '../settings';
import StorageService from './StorageService';
import EntityApiService from './EntityApiService';
import ApiClientService from './ApiClientService';
import {AuthCredential, AuthResult} from '../types/auth';

export const setProfile = (profile: any) => {
    StorageService.setItem(USER_PROFILE, profile);
};

export const getProfile = () => {
    return StorageService.getItem(USER_PROFILE);
};

class AuthService extends EntityApiService<any> {

    getMe = () => {
        return this.handleResponse(ApiClientService.get(`${API_AUTH.url}/users/me`));
    };

    signIn = (params: AuthCredential): Promise<AuthResult> => {
        return this.handleResponse(ApiClientService.post(`${API_AUTH.url}/signin`, params));
    };

    signUp = (params: any) => {
        return this.handleResponse(ApiClientService.post(`${API_AUTH.url}/signup`, params));
    };

    resendConfirmationAccess = (params: any) => {
        return this.handleResponse(ApiClientService.post(`${API_AUTH.url}/confirm/resend`, params));
    };

    verify = (key: string): Promise<AuthResult> => {
        return this.handleResponse(ApiClientService.post(`${API_AUTH.url}/confirm`, {key}));
    };
}

export default new AuthService('');
