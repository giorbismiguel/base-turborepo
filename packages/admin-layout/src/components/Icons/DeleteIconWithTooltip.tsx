import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton, Tooltip } from "@mui/material";

const DeleteIconWithTooltip = ({ onClick }: { onClick: () => void }) => {
  const { t } = useTranslation("common");

  return (
    <Tooltip title={t("delete")}>
      <IconButton size={"small"} color={"error"} onClick={onClick}>
        <DeleteOutlineOutlinedIcon fontSize={"small"} />
      </IconButton>
    </Tooltip>
  );
};

export default memo(DeleteIconWithTooltip);
