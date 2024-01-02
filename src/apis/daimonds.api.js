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
  NaturalDaimondByIdConfig = ApiRoutes.Daimonds.NaturalDaimondById;
  LabGrownDaimondByIdConfig = ApiRoutes.Daimonds.LabGrownDaimondById;
  NaturalDaimondEditsConfig = ApiRoutes.Daimonds.NaturalDaimondEdits;
  LabGrownDaimondEditsConfig = ApiRoutes.Daimonds.LabGrownDaimondEdits;

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
      method: this.NaturalDaimondByIdConfig.Method,
      url: this.NaturalDaimondByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getLabgrownById = async (data) => {
    return this.instance({
      method: this.LabGrownDaimondByIdConfig.Method,
      url: this.LabGrownDaimondByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getLabgrownEdit = async (data) => {
    return this.instance({
      method: this.LabGrownDaimondEditsConfig.Method,
      url: this.LabGrownDaimondEditsConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getNaturalEdit = async (data) => {
    return this.instance({
      method: this.NaturalDaimondEditsConfig.Method,
      url: this.NaturalDaimondEditsConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default User;
