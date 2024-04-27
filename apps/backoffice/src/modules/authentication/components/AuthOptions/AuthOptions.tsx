import { memo } from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MuiLink from "@mui/material/Link";
import { LanguageSelector } from "mui-react-common";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function AuthOptions() {
  const { t } = useTranslation("authentication");
  return (
    <div className="p-4 lg:mt-8 flex justify-center">
      <Stack alignItems="center" direction="row" spacing={2}>
        <LanguageSelector
          compProps={{ underline: "hover", className: "flex items-center" }}
          icon={
            <LanguageOutlinedIcon
              fontSize="small"
              sx={{ mt: "-1px", mr: "2px" }}
            />
          }
          mini={false}
        />
        <MuiLink
          className="flex items-center"
          component={Link}
          target="_blank"
          to="/terms-conditions"
          underline="hover"
        >
          <FiberManualRecordIcon sx={{ fontSize: "8px", mr: "2px" }} />
          {t("termsConditions")}
        </MuiLink>
        <MuiLink
          className="flex items-center"
          component={Link}
          to="/auth/reset_password/7018862a-3016-5b42-a513-97cee9f573d4"
          underline="hover"
        >
          <FiberManualRecordIcon sx={{ fontSize: "8px", mr: "2px" }} />
          {t("resetPassword")}
        </MuiLink>
      </Stack>
    </div>
  );
}

export default memo(AuthOptions);
