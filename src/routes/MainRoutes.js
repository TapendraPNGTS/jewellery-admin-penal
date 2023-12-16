import { lazy } from "react";
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
// dashboard routing
const Dashboard = Loadable(lazy(() => import("views/dashboard/Default")));
const Markups = Loadable(lazy(() => import("views/utilities/MarkupPrice/markups")));
const ShopTiming = Loadable(lazy(() => import("views/utilities/TimingShop/shop-timing")));

//User Route
const User = Loadable(lazy(() => import("views/utilities/users/user")));
const AddUser = Loadable(lazy(() => import("views/utilities/users/add-user")));
const EditUser = Loadable(
  lazy(() => import("views/utilities/users/edit-user"))
);


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      children: [
        {
          path: "user",
          element: <User />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "edit-user/:id",
          element: <EditUser />,
        },
      ],
    },
    
        {
          path: "add-markups",
          element: <Markups />,
        },        
        {
          path: "shop-timings",
          element: <ShopTiming />,
        },        
  ],
};

export default MainRoutes;
