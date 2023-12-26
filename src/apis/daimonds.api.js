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

  AllLabgrownConfig = ApiRoutes.Daimonds.AllLabgrown;
  AllNaturalConfig = ApiRoutes.Daimonds.AllNatural;
  DaimondByIDLabGrownConfig = ApiRoutes.Daimonds.DaimondByIDLabGrown;
  DaimondByIDNaturalConfig = ApiRoutes.Daimonds.DaimondByIDNatural;

  getAllLabgrown = async (data) => {
    return this.instance({
      method: this.AllLabgrownConfig.Method,
      url: this.AllLabgrownConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getAllNatural = async (data) => {
    return this.instance({
      method: this.AllNaturalConfig.Method,
      url: this.AllNaturalConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getNaturalById = async (data) => {
    return this.instance({
      method: this.DaimondByIDNaturalConfig.Method,
      url: this.DaimondByIDNaturalConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getLabgrownById = async (data) => {
    return this.instance({
      method: this.DaimondByIDLabGrownConfig.Method,
      url: this.DaimondByIDLabGrownConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default User;
