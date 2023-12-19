import React, { memo, useEffect, useMemo } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import { useToggle } from "hook-utils";
import { Trans } from "react-i18next";
import { HandlerErrorProps } from "./HandleError.types";

const NETWORK_ERROR = {
  title: "errors:notConnection",
  description: "errors:notConnectionMessage",
  severity: "error",
};

const ERROR = {
  title: "errors:generalError",
  description: "errors:generalErrorMessage",
  severity: "error",
};

const ERRORS_STATUS: { [key: number]: any } = {
  [404]: {
    title: "errors:notFoundError",
    description: "errors:notFoundMessage",
    severity: "error",
  },
  [403]: {
    title: "errors:permissionError",
    description: "errors:permissionMessage",
    severity: "error",
  },
  [401]: {
    title: "errors:authError",
    description: "errors:authMessage",
    severity: "error",
  },
};

const getError = (error: any) => {
  const errorGlobal = ERRORS_STATUS[error?.statusCode];
  if (
    errorGlobal?.title === "errors:authError" &&
    error.error === "BAD_CREDENTIALS"
  )
    return undefined;
  return errorGlobal;
};

const HandlerError = ({
  error,
  errors = {},
  networkError,
  mapError,
  closable = true,
}: HandlerErrorProps) => {
  const { isOpen, onClose, setOpen } = useToggle(!!error);

  useEffect(() => {
    setOpen(!!error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const currentError = useMemo(() => {
    if (networkError) return NETWORK_ERROR;
    if (!error) return null;
    if (error?.networkError) return NETWORK_ERROR;
    return (
      errors[error?.reference] || mapError?.(error) || getError(error) || ERROR
    );
  }, [error, errors, networkError]);

  return (
    <Collapse in={isOpen}>
      {currentError && (
        <Alert
          severity={currentError.severity || "error"}
          onClose={closable ? onClose : undefined}
          className={"mb-4"}
        >
          {currentError.title && (
            <AlertTitle>
              <Trans i18nKey={currentError.title} />
            </AlertTitle>
          )}
          <Trans i18nKey={currentError.description} />
        </Alert>
      )}
    </Collapse>
  );
};

export default memo(HandlerError);
