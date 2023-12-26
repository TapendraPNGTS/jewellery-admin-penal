import { getTokenLocal } from "../utils/localStorage.util";
import ApiRoutes from "../configs/endpoints.config";
import HttpClient from "./index.api";
const baseURL = process.env.REACT_APP_API_URL;
const AuthKey = process.env.REACT_APP_AUTH_KEY;

class ShopTime extends HttpClient {
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

  ShopTimeConfig = ApiRoutes.ShopTime.AllShop;
  AddShopConfig = ApiRoutes.ShopTime.AddShop;
  EditShopConfig = ApiRoutes.ShopTime.EditShop;
  ShopByIdConfig = ApiRoutes.ShopTime.ShopById;
  DeleteShopTimeConfig = ApiRoutes.ShopTime.DeleteShop;

  getAllShop = async (data) => {
    return this.instance({
      method: this.ShopTimeConfig.Method,
      url: this.ShopTimeConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getAddShop = async (data) => {
    return this.instance({
      method: this.AddShopConfig.Method,
      url: this.AddShopConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getEditShop = async (data) => {
    return this.instance({
      method: this.EditShopConfig.Method,
      url: this.EditShopConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getShopById = async (data) => {
    return this.instance({
      method: this.ShopByIdConfig.Method,
      url: this.ShopByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getDeleteShop = async (data) => {
    return this.instance({
      method: this.DeleteShopTimeConfig.Method,
      url: this.DeleteShopTimeConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default ShopTime;
