// assets
import {
  IconArticle,
  IconMap2,
  IconBrandBlogger,
  IconListNumbers,
  IconUsers,
  IconChecklist,
  IconHandFinger,
} from "@tabler/icons";

// constant
const icons = {
  IconMap2,
  IconArticle,
  IconBrandBlogger,
  IconListNumbers,
  IconUsers,
  IconChecklist,
  IconHandFinger,
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
      title: "Markup Price",
      type: "item",
      icon: icons.IconUsers,
      url: "/add-markups",
      breadcrumbs: true,
    },
    {
      id: "shop-timing",
      title: "Shop Timing",
      type: "item",
      icon: icons.IconUsers,
      url: "/shop-timings",
      breadcrumbs: true,
    },
    // {
    //   id: "users",
    //   title: "Daimonds",
    //   icon: icons.IconUsers,
    //   type: "collapse",
    //   children: [
    //     {
    //       id: "user-list",
    //       title: "All Daimonds",
    //       type: "item",
    //       url: "/user",
    //       breadcrumbs: true,
    //     },
    //     {
    //       id: "add-user",
    //       title: "Add Daimond",
    //       type: "item",
    //       url: "/add-user",
    //       breadcrumbs: true,
    //     },
    //     {
    //       id: "add-user",
    //       title: "Edit Daimond",
    //       type: "item",
    //       url: "/add-user",
    //       breadcrumbs: true,
    //     },
    //     {
    //       id: "add-user",
    //       title: "Remove Daimond",
    //       type: "item",
    //       url: "/add-user",
    //       breadcrumbs: true,
    //     },
    //   ],
    // },
  ],
};

export default utilities;
