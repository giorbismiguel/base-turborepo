import React, { memo } from "react";
import { Box, InputAdornment, useTheme } from "@mui/material";
import TextField from "./TextField";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useToggle } from "hook-utils";
import { PasswordFieldProps } from "./text.types";

const PasswordField = ({ hideIcon, ...props }: PasswordFieldProps) => {
  const { isOpen, onToggle } = useToggle();
  const theme = useTheme();

  return (
    <TextField
      {...props}
      type={isOpen ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position={"end"}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <>
                {props?.value && props.strong && (
                  <Box
                    component={"span"}
                    sx={{
                      color:
                        props?.value?.length >= props.strong
                          ? theme.palette.success.main
                          : theme.palette.warning.light,
                      padding: "0.5rem",
                    }}
                  >
                    {props?.value?.length >= props.strong ? "Strong" : "Weak"}
                  </Box>
                )}
                {!hideIcon && (
                  <Box
                    component={"span"}
                    sx={{
                      padding: "0.5rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onClick={onToggle}
                  >
                    {isOpen ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </Box>
                )}
              </>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
};

PasswordField.defaultProps = {
  hideIcon: false,
};

export default memo(PasswordField);
