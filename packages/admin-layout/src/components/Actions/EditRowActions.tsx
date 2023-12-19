import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import RowActions from "./RowActions";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

type EditRowActionsProps = {
  tooltip?: string;
  onClick?: () => any;
};

const EditRowActions = ({
  onClick,
  tooltip = "edit",
  ...props
}: EditRowActionsProps) => {
  const { t } = useTranslation("common");

  return (
    <RowActions
      icon={EditOutlinedIcon}
      tooltip={t(tooltip)}
      onClick={onClick}
      {...props}
    />
  );
};

export default memo(EditRowActions);
