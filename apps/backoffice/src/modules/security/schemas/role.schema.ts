import * as Yup from "yup";
import "validations";

export const roleSchema = Yup.object().shape({
  name: Yup.string().required("required").min(2, "min-2").max(255, "max-255"),
  description: Yup.string()
    .required("required")
    .min(2, "min-2")
    .max(255, "max-255"),
});

export const rolePermissionsSchema = Yup.object().shape({
  permissions: Yup.array().required("required").min(1, "permissions:min-1"),
});

export const roleIconSchema = Yup.object().shape({
  avatar: Yup.string().required("required"),
});
