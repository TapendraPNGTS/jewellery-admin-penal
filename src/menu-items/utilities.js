// assets
import {
  IconReport,
  IconCalendarStats,
  IconUserPlus
} from "@tabler/icons";

// constant
const icons = {
  IconReport,
  IconCalendarStats,
  IconUserPlus
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "patient",
      title: "Patient",
      type: "item",
      url: "/patient-list",
      icon: icons.IconUserPlus,
    },
    {
      id: "allDaimond",
      title: "All Daimond",
      type: "collapse",
      icon: icons.IconReport,
      children: [
        {
          id: "AddDaimond",
          title: "Add Daimond",
          type: "item",
          url: "/TodayAppointment",
        },
        {
          id: "pendingAppointment",
          title: "Pending",
          type: "item",
          url: "/PendingAppointment",
        },
        {
          id: "completedAppointment",
          title: "Completed",
          type: "item",
          url: "/CompletedAppointment",
        },
        {
          id: "cancelAppointment",
          title: "Cancel",
          type: "item",
          url: "/CancelAppointment",
        },
        {
          id: "appointment",
          title: "All",
          type: "item",
          url: "/appointment",
        },
      ],
    },
    
    {
      id: "Calender",
      title: "Calender",
      type: "item",
      url: "/AppointmentCalendar",
      icon: icons.IconCalendarStats,
    },
  ],
};

export default utilities;
