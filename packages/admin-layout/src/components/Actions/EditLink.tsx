import { useParamsLink } from "security";
import { Link, LinkProps } from "@mui/material";
import React, { memo } from "react";

type IEditRowProps = LinkProps & {
  entityId: string;
  children: React.ReactNode;
};

const EditLink = ({ entityId, children, ...props }: IEditRowProps) => {
  const handleEdit = useParamsLink({ edit: entityId });

  return (
    <Link
      underline="hover"
      sx={{ cursor: "pointer" }}
      onClick={handleEdit}
      {...props}
    >
      {children}
    </Link>
  );
};

export default memo(EditLink);
