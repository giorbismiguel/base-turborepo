import * as Yup from "yup";
import "validations";
import { PasswordType } from "modules/users/interfaces/IChangePassword";

export const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "min-2")
    .max(255, "max-255")
    // @ts-ignore
    .name("invalidValue") //name es una validación custom creada en validations
    .required("required"),

  lastName: Yup.string()
    .min(2, "min-2")
    .max(255, "max-255")
    // @ts-ignore
    .name("invalidValue")
    .required("required"),

  // @ts-ignore
  phone: Yup.string().nullable().phone("invalidPhone"),

  email: Yup.string().email("validEmail").max(255).required("required"),
});

export const userIdsSchema = Yup.object().shape({
  users: Yup.array().required("required").min(1, "users:min-1"),
});

export const userPasswordSchema = Yup.object().shape({
  lastPassword: Yup.string()
    // @ts-ignore
    .password()
    .max(255, "max-255")
    .required("required"),

  password: Yup.string()
    // @ts-ignore
    .password()
    .max(255, "max-255")
    .required("required"),

  confirm: Yup.string()
    // @ts-ignore
    .password()
    .max(255, "max-255")
    // @ts-ignore
    .oneOf([Yup.ref("password"), null], "passwordsMustMatch")
    .required("required"),
});

export const userAddRolesSchema = Yup.object().shape({
  roles: Yup.array().required("required").min(1, "roles:min-1"),
});

export const userRolesSchema = Yup.object().shape({
  roles: Yup.array().required("required").min(1, "roles:min-1"),
});

export const userRetypePasswordSchema = Yup.object().shape({
  password: Yup.string()
    // @ts-ignore
    .password()
    .max(255, "max-255")
    .required("required"),

  confirm: Yup.string()
    // @ts-ignore
    .password()
    .max(255, "max-255")
    // @ts-ignore
    .oneOf([Yup.ref("password"), null], "passwordsMustMatch")
    .required("required"),

  changePasswordRequire: Yup.boolean().required("required"),

  typePassword: Yup.string()
    .oneOf(Object.values(PasswordType))
    .required("required"),
});
