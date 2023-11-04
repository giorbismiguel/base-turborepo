import React, {FC, memo, useEffect} from "react";
import PropTypes, {bool} from "prop-types";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import {useToggle} from "@dfl/hook-utils";
import {HandlerSuccessProps} from "./HandlerSuccess.types";

const HandlerSuccess: FC<HandlerSuccessProps> = ({active, title, message}) => {
  const {isOpen, onClose, setOpen} = useToggle(!!active);

  useEffect(() => {
    setOpen(!!active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <Collapse in={isOpen}>
      <Alert severity={"success"} onClose={onClose} className={"mb-4"}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Collapse>
  );
};

export default memo(HandlerSuccess);

HandlerSuccess.defaultProps = {};
