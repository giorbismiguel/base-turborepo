import { EntityApiService, ApiClientService } from "security";
import type { InterfaceRole } from "modules/security/interfaces";

class RoleService extends EntityApiService<InterfaceRole> {
  addUsers = (roleId: string | undefined, userIds: string[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (roleId && userIds) {
      if (userIds.length)
        return this.handleResponse(
          ApiClientService.post(this.getPath(`/${roleId}/users`), {
            users: userIds,
          }),
        );
      return Promise.resolve();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      message: "You must need a roleId and a list of users ids",
    });
  };
  deleteUsers = (roleId: string | undefined, userIds: string[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (roleId && userIds) {
      if (userIds.length)
        return this.handleResponse(
          ApiClientService.delete(this.getPath(`/${roleId}/users`), {
            data: {
              users: userIds,
            },
          }),
        );
      return Promise.resolve();
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      message: "You must need a roleId and a list of users ids",
    });
  };

  addPermissions = (roleId: string | undefined, permissions: string[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (roleId && permissions) {
      if (permissions.length)
        return this.handleResponse(
          ApiClientService.patch(this.getPath(`/${roleId}`), {
            permissions,
          }),
        );
      return Promise.resolve();
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      message: "You must need a roleId and a list of permissions",
    });
  };

  updateAvatar = (roleId: string | undefined, avatar: string) => {
    if (roleId && avatar) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${roleId}`), {
          _id: roleId,
          avatar,
        }),
      );
    }
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({
      message: "You must need a roleId and an avatar",
    });
  };
}

export default new RoleService("/ms-auth/api/security/roles");
