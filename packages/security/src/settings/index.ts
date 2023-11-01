export const USER_KEY = 'dfl-user'
export const CURRENT_USER_KEY = 'USER-ME'
export const USER_PROFILE = process.env.REACT_APP_USER_PROFILE || process.env.NEXT_PUBLIC_USER_PROFILE || '__user_profile__';

export const API_AUTH = {
    url: process.env.REACT_APP_AUTH_URL || process.env.NEXT_PUBLIC_AUTH_URL || '/ms-auth/api',
};

export const SUPERADMIN_ROLE = process.env.REACT_APP_SUPERADMIN_ROLE || process.env.NEXT_PUBLIC_SUPERADMIN_ROLE || 'ADMIN'

export const NETWORK_ERROR = '00000';