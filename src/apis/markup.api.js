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

  AllMarkupConfig = ApiRoutes.Markup.AllMarkup;
  MarkupByIdConfig = ApiRoutes.Markup.MarkupById;
  AddMarkupConfig = ApiRoutes.Markup.AddMarkup;
  UpdateMarkupConfig = ApiRoutes.Markup.UpdateMarkup;
  DeleteMarkupConfig = ApiRoutes.Markup.DeleteMarkup;

  getAllMarkup = async () => {
    return this.instance({
      method: this.AllMarkupConfig.Method,
      url: this.AllMarkupConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getMarkupById = async (data) => {
    return this.instance({
      method: this.MarkupByIdConfig.Method,
      url: this.MarkupByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getAddMarkup = async (data) => {
    return this.instance({
      method: this.AddMarkupConfig.Method,
      url: this.AddMarkupConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getUpdateMarkup = async (data) => {
    return this.instance({
      method: this.UpdateMarkupConfig.Method,
      url: this.UpdateMarkupConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getDeleteMarkup = async (data) => {
    return this.instance({
      method: this.DeleteMarkupConfig.Method,
      url: this.DeleteMarkupConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default User;
