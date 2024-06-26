import * as Yup from "yup";
import "validations";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("validEmail")
    .max(255, "max-255")
    .required("required"),
  // @ts-expect-error
  password: Yup.string().password().required("required") as unknown as string,
  remember: Yup.bool(),
});

export const identifierSchema = Yup.object().shape({
  identifier: Yup.string()
    .email("validEmail")
    .max(255, "max-255")
    .required("required"),
});

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "min-2")
    .max(255, "max-255")
    // @ts-expect-error
    .name("invalidValue")
    .required("required"),
  lastName: Yup.string()
    .min(2, "min-2")
    .max(255, "max-255")
    // @ts-expect-error
    .name("invalidValue")
    .required("required"),
  email: Yup.string().email("validEmail").max(255).required("required"),
  password: Yup.string().min(6, "passwordStrength").required("required"),
});

export const resetPasswordSchema = Yup.object().shape({
  // @ts-expect-error
  password: Yup.string().password().required("required"),
  confirmPassword: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password")], "passwordsMatch"),
});
