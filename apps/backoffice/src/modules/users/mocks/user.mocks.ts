import UserAvatar from "assets/avatar.png";
import RoleImage from "assets/role6.png";
import { IPermission } from "modules/users/interfaces/IPermission";
import { InterfaceRoleSetting } from "modules/users/interfaces/IRoleSetting";
import { InterfaceUser } from "modules/users/interfaces/IUser";

const PermissionsMock: IPermission[] = [1, 2, 3].map((index) => ({
  _id: String(index),
  name: "Value",
  description: "Breadcrumb3",
  active: Math.random() > 0.5,
}));

const RoleMock: InterfaceRoleSetting[] = [
  {
    role: {
      _id: Math.floor(Math.random() * 100000).toString(),
      name: "Developer",
      image: RoleImage,
      permissions: PermissionsMock,
    },
  },
];

export const UserMock: InterfaceUser = {
  _id: "1",
  email: "rpuporuiz@gmail.com",
  firstName: "Reinier",
  lastName: "Pupo",
  avatar: UserAvatar,
  phone: "(+53) 5 8180283",
  country: "Cuba",
  createdAt: new Date("2022-05-19"),
  roles: RoleMock,
};
