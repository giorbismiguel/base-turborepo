import ApiClientService from './ApiClientService';
import {API_AUTH} from '../settings';
import {AuthResult} from '../types/auth';
import {ITokenService} from '../types/ITokenService';
import {AxiosResponse} from 'axios';

export const setAuthData = ({accessToken, refreshToken, space}: AuthResult) => {
    ApiClientService.setToken(accessToken);
    if (refreshToken)
        ApiClientService.setRefreshToken(refreshToken);
    if (space) {
        ApiClientService.setSpace(space);
    }
};

export const handleUserResponse = ({data}: { data: AuthResult }) => {
    setAuthData(data);
    return data;
};


class TokenService implements ITokenService {
    private refreshPromiseSingleton: Promise<AxiosResponse> | null;

    constructor() {
        this.refreshPromiseSingleton = null;
    }

    refresh = () => {
        if (!this.refreshPromiseSingleton) {
            const token = ApiClientService.getToken();
            const refresh = ApiClientService.getRefreshToken();
            const space = ApiClientService.getSpace();

            this.refreshPromiseSingleton = ApiClientService.post(`${API_AUTH.url}/refresh-token`, {
                token,
                refresh,
                space
            }, {ignoreToken: true});

            this.refreshPromiseSingleton.then((data: AxiosResponse) => {
                handleUserResponse(data);
                this.refreshPromiseSingleton = null;
                return data;
            });

            this.refreshPromiseSingleton.catch((e) => {
                console.log('TokenService refreshPromiseSingleton error',)
                this.refreshPromiseSingleton = null;
                return e;
            });
        }
        return this.refreshPromiseSingleton;
    };
}

export default new TokenService();
