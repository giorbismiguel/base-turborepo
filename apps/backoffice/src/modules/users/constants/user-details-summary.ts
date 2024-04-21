import type { DetailStackItemRecord } from "mui-react-common";

export const USER_DETAILS_SUMMARY: DetailStackItemRecord[] = [
  {
    label: "phone",
    render: (user) => String(user?.phone),
    hideEmpty: true,
    translate: true,
  },
  {
    label: "firstName",
    render: (user) => String(user?.firstName),
    translate: true,
  },
  {
    label: "lastName",
    render: (user) => String(user?.lastName),
    translate: true,
  },
];
