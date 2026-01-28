import { Api } from "./api";

export class AuthApiRefreshTokenState {
  public static isRequesting = false;
  public static refreshTokenPromises: Promise<void>[] = [];
}

export class AuthApi extends Api {
  public constructor() {
    super();

    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }
}

export const authApi = new AuthApi();
