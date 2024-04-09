import { TabViews } from "admin-layout";

export const userViewTabs: TabViews = {
  all: {
    title: "all",
    filters: {},
  },
  active: {
    title: "active",
    filters: {
      type: "AND",
      filters: [
        {
          type: "TERM",
          field: "lock",
          value: false,
        },
        {
          type: "TERM",
          field: "verified",
          value: true,
        },
      ],
    },
  },
  unverify: {
    title: "unverify",
    filters: {
      type: "TERM",
      field: "verified",
      value: false,
    },
  },
  lock: {
    title: "lock",
    filters: {
      type: "TERM",
      field: "lock",
      value: true,
    },
  },
};
