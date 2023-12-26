import {
  IconUsers,
  IconChecklist,
  IconBuildingStore,
  IconTruckDelivery,
  IconAddressBook,
  IconPercentage,
  IconDiamond,
} from "@tabler/icons";

// constant
const icons = {
  IconUsers,
  IconBuildingStore,
  IconChecklist,
  IconTruckDelivery,
  IconAddressBook,
  IconPercentage,
  IconDiamond,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "users",
      title: "User",
      icon: icons.IconUsers,
      type: "collapse",
      children: [
        {
          id: "user-list",
          title: "User List",
          type: "item",
          url: "/user",
          breadcrumbs: true,
        },
        {
          id: "add-user",
          title: "Add User",
          type: "item",
          url: "/add-user",
          breadcrumbs: true,
        },
      ],
    },
    {
      id: "markpus",
      title: "Markup",
      type: "item",
      icon: icons.IconPercentage,
      url: "/all-markups",
      breadcrumbs: true,
    },
   
    {
      id: "orders",
      title: "Orders History",
      type: "item",
      icon: icons.IconTruckDelivery,
      url: "/orders-history",
      breadcrumbs: true,
    },
    {
      id: "daimond-history",
      title: "Daimonds Type",
      type: "collapse",
      icon: icons.IconDiamond,
      children: [
        {
          id: "nature-diamonds",
          title: "Nature Daimonds",
          type: "item",
          url: "/nature-daimonds",
          breadcrumbs: true,
        },
        {
          id: "labgrown-diamonds",
          title: "Labgrown Daimonds",
          type: "item",
          url: "/labgrown-daimonds",
          breadcrumbs: true,
        },
      ],
    },
    {
      id: "shop-time",
      title: "Shop Time",
      type: "collapse",
      icon: icons.IconBuildingStore,
      children: [
        {
          id: "all-times",
          title: "All ShopTime",
          type: "item",
          url: "/shoptime-history",
          breadcrumbs: true,
        },
        {
          id: "add-shoptime",
          title: "Add ShopTime",
          type: "item",
          url: "/add-shoptime",
          breadcrumbs: true,
        },
      ],
    },
    {
      id: "leads",
      title: "All Leads",
      type: "item",
      icon: icons.IconAddressBook,
      url: "/leads-history",
      breadcrumbs: true,
    },
  ],
};

export default utilities;
