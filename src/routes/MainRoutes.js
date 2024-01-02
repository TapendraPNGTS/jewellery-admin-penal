import { lazy } from "react";
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
import { Route } from "react-router";
// dashboard routing
const Dashboard = Loadable(lazy(() => import("views/dashboard/Default")));

// Markups Route
const AddMarkups = Loadable(
  lazy(() => import("views/utilities/MarkupPrice/addMarkups"))
);
const AllMarkups = Loadable(
  lazy(() => import("views/utilities/MarkupPrice/allMarkups"))
);
const DeleteMarkups = Loadable(
  lazy(() => import("views/utilities/MarkupPrice/deleteMarkup"))
);
const UpdateMarkups = Loadable(
  lazy(() => import("views/utilities/MarkupPrice/updateMarkups"))
);
const ViewMarkups = Loadable(
  lazy(() => import("views/utilities/MarkupPrice/viewMarkupsById"))
);
// Shops Route
const AddShopTime = Loadable(
  lazy(() => import("views/utilities/ShopTime/addShtopTime"))
);
const AllShopTime = Loadable(
  lazy(() => import("views/utilities/ShopTime/shopTime"))
);
const UpdateShopTime = Loadable(
  lazy(() => import("views/utilities/ShopTime/updateShopTime"))
);
const ViewShopTime = Loadable(
  lazy(() => import("views/utilities/ShopTime/viewShopTimeById"))
);

//Natural Daimonds Routes
const DaimondsHistory = Loadable(
  lazy(() => import("views/utilities/NatureDaimonds/allNatDaimonds"))
);
const EditDaimond = Loadable(
  lazy(() => import("views/utilities/NatureDaimonds/editDaimond"))
);
const ViewDaimond = Loadable(
  lazy(() => import("views/utilities/NatureDaimonds/viewsDaimond"))
);

//LabGrown Daimonds Routes
const LabGrownHistory = Loadable(
  lazy(() => import("views/utilities/LabgrownDaimonds/allLabDaimonds"))
);
const EditDaimondLabgrown = Loadable(
  lazy(() => import("views/utilities/LabgrownDaimonds/editDaimond"))
);
const ViewDaimondLabgrown = Loadable(
  lazy(() => import("views/utilities/LabgrownDaimonds/viewsDaimond"))
);

//Orders Routes
const OrdersHistory = Loadable(
  lazy(() => import("views/utilities/Orders/ordersHistory"))
);
const OrdersView = Loadable(
  lazy(() => import("views/utilities/Orders/viewOders"))
);
const AllLeads = Loadable(
  lazy(() => import("views/utilities/Leads/leadsHistory"))
);
const LeadsDetails = Loadable(
  lazy(() => import("views/utilities/Leads/leadsDetails"))
);

//User Route
const User = Loadable(lazy(() => import("views/utilities/users/user")));
const AddUser = Loadable(lazy(() => import("views/utilities/users/add-user")));

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
      ],
    },

    {
      children: [
        {
          path: "add-markups",
          element: <AddMarkups />,
        },
        {
          path: "all-markups",
          element: <AllMarkups />,
        },
        {
          path: "update-markups/:id",
          element: <UpdateMarkups />,
        },
        {
          path: "delete-markups/:id",
          element: <DeleteMarkups />,
        },
        {
          path: "views-markups/:id",
          element: <ViewMarkups />,
        },
      ],
    },
    {
      children: [
        {
          path: "/nature-daimonds",
          element: <DaimondsHistory />,
        },
        {
          path: "edit-daimonds/:id",
          element: <EditDaimond />,
        },
        {
          path: "view-daimonds/:id",
          element: <ViewDaimond />,
        },
      ],
    },
    {
      children: [
        {
          path: "/labgrown-daimonds",
          element: <LabGrownHistory />,
        },
        {
          path: "view-daimondsLab/:id",
          element: <ViewDaimondLabgrown />,
        },
        {
          path: "edit-daimondsLab/:id",
          element: <EditDaimondLabgrown />,
        },
      ],
    },
    {
      children: [
        {
          path: "/orders-history",
          element: <OrdersHistory />,
        },
        {
          path: "/view-orders/:id",
          element: <OrdersView />,
        },
        {
          path: "/leads-history",
          element: <AllLeads />,
        },
        {
          path: "/leads-details/:id",
          element: <LeadsDetails />,
        },
      ],
    },
    {
      children: [
        {
          path: "/add-shoptime",
          element: <AddShopTime />,
        },
        {
          path: "/shoptime-history",
          element: <AllShopTime />,
        },
        {
          path: "/update-shoptime/:id",
          element: <UpdateShopTime />,
        },
        {
          path: "/view-shoptime/:id",
          element: <ViewShopTime />,
        },
      ],
    },
  ],
};

export default MainRoutes;
