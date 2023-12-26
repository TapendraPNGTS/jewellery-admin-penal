export const HttpMethod = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
};

const ApiRoutes = {
  Dashboard: {
    Data: {
      Endpoint: "/dashboard",
      Method: HttpMethod.Post,
    },
  },
  Auth: {
    Login: {
      Endpoint: "adminLogin",
      Method: HttpMethod.Post,
    },
  },
  User: {
    All: {
      Endpoint: "getAllUser",
      Method: HttpMethod.Post,
    },
    UserById: {
      Endpoint: "user/getUserById",
      Method: HttpMethod.Post,
    },
  },
  Markup: {
    AddMarkup: {
      Endpoint: "addMarkup",
      Method: HttpMethod.Post,
    },
    UpdateMarkup: {
      Endpoint: "updateMarkup",
      Method: HttpMethod.Post,
    },
    AllMarkup: {
      Endpoint: "getAllMarkup",
      Method: HttpMethod.Post,
    },
    MarkupById: {
      Endpoint: "getMarkupById",
      Method: HttpMethod.Post,
    },
    DeleteMarkup: {
      Endpoint: "deleteMarkup",
      Method: HttpMethod.Post,
    },
  },
  Daimonds: {
    AllLabgrown: {
      Endpoint: "getAllLabgrown",
      Method: HttpMethod.Post,
    },
    AllNatural: {
      Endpoint: "getAllNatural",
      Method: HttpMethod.Post,
    },
    DaimondByIDNatural: {
      Endpoint: "getNaturalDetail",
      Method: HttpMethod.Post,
    },
    DaimondByIDLabGrown: {
      Endpoint: "getLabGrownDetail",
      Method: HttpMethod.Post,
    },
  },
  Orders: {
    AllOrder: {
      Endpoint: "getAllOrder",
      Method: HttpMethod.Post,
    },
    OrderDetails: {
      Endpoint: "orderDetail",
      Method: HttpMethod.Post,
    },
    AllLeads: {
      Endpoint: "getAllLead",
      Method: HttpMethod.Post,
    },
  },
  ShopTime: {
    AllShop: {
      Endpoint: "getAllShop",
      Method: HttpMethod.Post,
    },
    AddShop: {
      Endpoint: "addShop",
      Method: HttpMethod.Post,
    },
    EditShop: {
      Endpoint: "editShop",
      Method: HttpMethod.Post,
    },
    ShopById: {
      Endpoint: "getShopById",
      Method: HttpMethod.Post,
    },
    DeleteShop: {
      Endpoint: "deleteShop",
      Method: HttpMethod.Post,
    },
  },
  
};


export default ApiRoutes;
