export type AuthCredential = {
  identifier: string;
  password: string;
  email?: string;
  remember?: boolean;
};

export type AuthResult = {
  accessToken: string;
  refreshToken: string;
  space: string;
};

export type CurrentUser = {
  error?: any;
  user: null | any;
  isLoading: boolean;
  loadUser: () => void;
  hasToken: boolean;
};
