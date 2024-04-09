import { FilterType } from "admin-layout";

export const filters = [
  {
    filter: "common:phone",
    translate: true,
    type: FilterType.TEXT,
    key: "ph",
    field: "phone",
  },
  {
    filter: "users:status",
    translate: true,
    type: FilterType.FIXED_LIST,
    key: "st",
    field: "status",
    options: [
      {
        value: "act",
        translate: true,
        label: "users:statusName.ACTIVE",
      },
      {
        value: "unv",
        translate: true,
        label: "users:statusName.UNVERIFIED",
      },
      {
        value: "lock",
        translate: true,
        label: "users:statusName.LOCK",
      },
    ],
  },
  {
    filter: "common:createdAt",
    translate: true,
    type: FilterType.DATE,
    key: "createdAt",
    field: "createdAt",
  },
];
