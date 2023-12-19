import { ERRORS } from "./errors";

export const LOGIN_ERRORS = {
  [ERRORS.UNAUTHORIZED_INVALID_CREDENTIALS]: {
    description: "authentication:errors.badCredentials",
  },
  [ERRORS.UNAUTHORIZED_USER_NOT_VERIFIED]: {
    description: "authentication:errors.notVerified",
  },
  [ERRORS.ACCOUNT_CONFIRMATION_FAILED]: {
    title: "authentication:confirmation.errorCheckTitle",
    description: "authentication:confirmation.errorCheckSubtext",
  },
  RESET_PASSWORD_INVALID_LINK: {
    title: "authentication:recovery.errorCheckTitle",
    reference: "RESET_PASSWORD_INVALID_LINK",
    description: "authentication:recovery.errorCheckSubtext",
  },
  [ERRORS.USER_NOT_FOUND_OR_VERIFIED]: {
    description: "authentication:confirmation.errorUserNotFountOrVerified",
  },
  [ERRORS.PASSWORD_HISTORY]: {
    description: "authentication:errors.passwordHistory",
  },
};

export const SIGNUP_ERRORS = {
  [ERRORS.DUPLICATED_USER]: {
    description: "authentication:errors.duplicatedUser",
  },
  [ERRORS.DUPLICATE_KEY]: {
    description: "authentication:errors.duplicatedCI",
  },
};
