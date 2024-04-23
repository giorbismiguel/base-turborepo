import type { InterfaceRoleSetting } from "modules/users/interfaces/IRoleSetting";
import type { InterfaceRole } from "modules/security/interfaces";

export interface InterfaceUser {
  _id?: string;
  email: string;
  fullName?: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  avatarOriginal?: string;
  phone: string;
  country?: string;
  createdAt?: Date;
  roles?: InterfaceRoleSetting[] | InterfaceRole[];
  lock?: boolean;
  verified?: boolean;
  _disableForm?: boolean;
}
