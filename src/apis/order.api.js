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

  AllOrderConfig = ApiRoutes.Orders.AllOrder;
  OrderByIdConfig = ApiRoutes.Orders.OrderDetails;
  AllLeadsConfig = ApiRoutes.Orders.AllLeads;
  LeadsByIdConfig = ApiRoutes.Orders.LeadsById;

  getAllLeads = async () => {
    return this.instance({
      method: this.AllLeadsConfig.Method,
      url: this.AllLeadsConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getLeadsById = async (data) => {
    return this.instance({
      method: this.LeadsByIdConfig.Method,
      url: this.LeadsByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
  getAllOrder = async () => {
    return this.instance({
      method: this.AllOrderConfig.Method,
      url: this.AllOrderConfig.Endpoint,
      headers: {},
      data: null,
    });
  };
  getOrderById = async (data) => {
    return this.instance({
      method: this.OrderByIdConfig.Method,
      url: this.OrderByIdConfig.Endpoint,
      headers: {},
      data: data,
    });
  };
}

export default User;
