import type { IPermission } from "modules/users/interfaces/IPermission";

export interface InterfaceRole {
  _id?: string;
  name: string;
  avatar?: string;
  description?: string;
  permissions?: IPermission[];
  createdAt?: Date;
}
