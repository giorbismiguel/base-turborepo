import { ReactNode } from 'react';
import { CurrentUser } from '../types/auth';

export type SecurityProps = {
  user?: any
  isLoading: boolean
  setUser: (value: any)=> void
  loadUser: ()=> void
  hasToken : boolean
}

export type SecurityProviderProps = {
  useMe:  (initUser: any, setUser: (value: any) => void) => CurrentUser
  children: ReactNode | undefined;
}

