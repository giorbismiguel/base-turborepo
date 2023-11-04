import type {FC} from "react";
import React, { memo, useEffect} from "react";
import PropTypes, {bool} from "prop-types";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import {useToggle} from "hook-utils";
import type {HandlerSuccessProps} from "./HandlerSuccess.types";

const HandlerSuccess: FC<HandlerSuccessProps> = ({active, title, message}) => {
  const {isOpen, onClose, setOpen} = useToggle(Boolean(active));

  useEffect(() => {
    setOpen(Boolean(active));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <Collapse in={isOpen}>
      <Alert className="mb-4" onClose={onClose} severity="success">
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        {message}
      </Alert>
    </Collapse>
  );
};

export default memo(HandlerSuccess);

HandlerSuccess.defaultProps = {};
