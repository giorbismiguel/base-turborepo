import React from "react";
import { Box, styled } from "@mui/material";
import { ChildrenProps } from "mui-react-common";

const AdminLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

const AdminMain = ({ children }: ChildrenProps) => {
  return (
    <AdminLayoutRoot>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          width: "100%",
          paddingX: { xs: "8px", md: "20px" },
        }}
      >
        {children}
      </Box>
    </AdminLayoutRoot>
  );
};

AdminMain.defaultProps = {
  children: null,
};

export default AdminMain;
