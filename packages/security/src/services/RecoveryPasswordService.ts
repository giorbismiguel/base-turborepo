/* eslint-disable no-undef */

import EntityApiService from "./EntityApiService";
import ApiClientService from "./ApiClientService";
import { API_AUTH } from "../settings";

class RecoveryPasswordService extends EntityApiService<any> {
  init = (params: { identifier: string }) => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/init`), params)
    ).then((data) => {
      data.email = params.identifier;
      return data;
    });
  };

  finish = (params: any) => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/finish`), params)
    );
  };

  check = (key: string, type: string = "email") => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/check`), { key, type })
    );
  };
}

export default new RecoveryPasswordService(`${API_AUTH.url}/forgot-password`);
