import React, { memo } from "react";
import { LanguageSelector } from "mui-react-common";
import { Button } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const LanguageButton = () => {
  return (
    <LanguageSelector
      component={Button}
      mini
      compProps={{ variant: "text", color: "secondary" }}
      icon={
        <LanguageOutlinedIcon
          fontSize={"small"}
          sx={{ mt: "-2px", mr: "4px" }}
        />
      }
    />
  );
};

export default memo(LanguageButton);
