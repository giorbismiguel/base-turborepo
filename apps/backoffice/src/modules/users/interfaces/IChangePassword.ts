export interface IChangePassword {
  lastPassword: string;
  password: string;
  confirm: string;
  changePasswordRequire: boolean;
}

export enum PasswordType {
  GENERATE = "generate",
  RETYPE = "retype"
};
