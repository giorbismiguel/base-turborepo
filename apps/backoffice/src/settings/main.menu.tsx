import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Chip, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupIcon from "@mui/icons-material/Group";
import GppGoodIcon from "@mui/icons-material/GppGood";
import type { IMenu } from "mui-react-common";

export const MAIN_MENU: IMenu[] = [
  {
    title: "main_menu.general.title",
    permissions: ["ADMIN"],
    items: [
      {
        title: "main_menu.overview.title",
        path: "/",
        disabled: true,
        icon: <HomeIcon fontSize="small" />,
        permissions: ["ADMIN"],
      },
      {
        title: "main_menu.analytics.title",
        path: "/dashboard/analytics",
        icon: <BarChartIcon fontSize="small" />,
        permissions: ["ADMIN"],
        info: <Typography variant="caption">24h</Typography>,
        children: [
          {
            title: "main_menu.overview.title",
            path: "/dashboard/analytics/1",
            permissions: ["ADMIN"],
          },
          {
            title: "main_menu.analytics.title",
            path: "/dashboard/analytics/2",
            permissions: ["ADMIN"],
          },
        ],
      },
      {
        title: "main_menu.finance.title",
        path: "/dashboard/finance",
        icon: <PieChartIcon fontSize="small" />,
        permissions: ["ADMIN"],
      },
      {
        title: "main_menu.logistics.title",
        path: "/dashboard/logistics",
        icon: <LocalShippingIcon fontSize="small" />,
        chip: (
          <Chip
            color="primary"
            label={
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                NEW
              </Typography>
            }
            size="small"
          />
        ),
        permissions: ["ADMIN"],
      },
      {
        title: "main_menu.account.title",
        path: "/user/me",
        icon: <AccountCircleIcon fontSize="small" />,
        permissions: ["ADMIN"],
      },
    ],
  },
  {
    title: "main_menu.management.title",
    permissions: ["USER", "ROLES"],
    atLessOne: true,
    items: [
      {
        title: "main_menu.users.title",
        path: "/users",
        partialMatch: true,
        icon: <GroupIcon fontSize="small" />,
        permissions: ["USER"],
      },
      {
        title: "main_menu.roles.title",
        path: "/security/roles",
        partialMatch: true,
        icon: <GppGoodIcon fontSize="small" />,
        permissions: ["ROLES"],
      },
    ],
  },
];
