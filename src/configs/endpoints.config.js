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
      Endpoint: "dashboard",
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
    AddUser: {
      Endpoint: "user/createUser",
      Method: HttpMethod.Post,
    },
    EditUser: {
      Endpoint: "user/editUser",
      Method: HttpMethod.Post,
    },
    DeleteUser: {
      Endpoint: "user/deleteUser",
      Method: HttpMethod.Post,
    },
  },
};

export default ApiRoutes;
