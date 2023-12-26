import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;
const AuthKey = process.env.REACT_APP_AUTH_KEY;

class User extends HttpClient {
  constructor() {
    super(baseURL);
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use((config) => {
      config.headers["Authorization"] = `Bearer ${getTokenLocal()}`;
      config.headers["AuthKey"] = `${AuthKey}`;
      return config;
    });
  };

  _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (response) => {
        return Promise.resolve(response);
      }
    );
  };

  AllUserConfig = ApiRoutes.User.All;
  UserByIdConfig = ApiRoutes.User.UserById;

  getAllUser = async () => {
    return this.instance({
      method: this.AllUserConfig.Method,
      url: this.AllUserConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getUserById = async (data) => {
    return this.instance({
      method: this.UserByIdConfig.Method,
      url: this.UserByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default User;
