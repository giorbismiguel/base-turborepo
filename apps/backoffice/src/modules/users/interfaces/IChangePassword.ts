export interface ChangePassword {
  lastPassword: string;
  password: string;
  confirm: string;
  changePasswordRequire: boolean;
}

export enum PasswordType {
  GENERATE = "generate",
  RETYPE = "retype",
}
