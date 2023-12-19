import React, { memo, ReactNode } from "react";
import Toolbar from "@mui/material/Toolbar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ChildrenProps } from "mui-react-common";
import { useTableSelection } from "../hooks";
import { useTranslation } from "react-i18next";

type TableToolbarProps = ChildrenProps & {
  selectActions?: ReactNode | undefined;
};

const TableToolbar = ({ selectActions, children }: TableToolbarProps) => {
  const { numSelected } = useTableSelection([]);
  const hasActions: boolean = numSelected > 0 && !!selectActions;
  const { t } = useTranslation("common");

  return (
    <Toolbar
      sx={{
        paddingY: "12px",
        paddingX: { xs: 0, sm: 0 },
        ...(hasActions && {
          paddingX: { xs: 1, sm: 2 },
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {hasActions ? (
        <>
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} {t("selected")}
          </Typography>
          {selectActions}
        </>
      ) : (
        children
      )}
    </Toolbar>
  );
};

export default memo(TableToolbar);
