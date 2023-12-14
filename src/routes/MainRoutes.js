import { lazy } from "react";
// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";
// import Lazy from "yup/lib/Lazy";

// dashboard routing
const Dashboard = Loadable(lazy(() => import("views/dashboard/Default")));
// utilities routing
const Users = Loadable(lazy(() => import("views/utilities/users/users")));
const PatientList = Loadable(lazy(() => import("views/utilities/Patient/patient-list")));
const AddPatient = Loadable(lazy(() => import("views/utilities/Patient/addPatient")));
const EditPatientList = Loadable(lazy(() => import("views/utilities/Patient/edit-patient-list")));
const PatientReport = Loadable(lazy(() => import("views/utilities/Patient/patient-report")));
const PaymentPay = Loadable(lazy(() => import("views/utilities/Patient/PatientPaymentPay")));
const PaymentDetails = Loadable(lazy(() => import("views/utilities/Patient/PatientIdAllAppoinment")));
const DuePayment = Loadable(lazy(() => import("views/utilities/Patient/DuePayment")));


const UserScore = Loadable(
  lazy(() => import("views/utilities/users/users-score"))
);
const AppointmentList = Loadable(
  lazy(() => import("views/utilities/Appoinment/AppoinmentList"))
);
const AddCategory = Loadable(
  lazy(() => import("views/utilities/Appoinment/add-appoinment"))
);
const EditAppointment = Loadable(
  lazy(() => import("views/utilities/Appoinment/edit-appoinment"))
);
const CalendarData = Loadable(
  lazy(() => import("views/utilities/Calender/AppointmentCalendar"))
);

const PendingAppointment = Loadable(lazy(() => import("views/utilities/Appoinment/pendingAppoinment")));
const CancelAppointment = Loadable(lazy(() => import("views/utilities/Appoinment/cancelAppointment")));
const CompletedAppointment = Loadable(lazy(() => import("views/utilities/Appoinment/completedAppointment")));
const TodayAppoinment = Loadable(lazy(() => import("views/utilities/Appoinment/TodayAppoinment")));


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
          path: "appointment",
          element: <AppointmentList />,
        },
        {
          path: "PendingAppointment",
          element: <PendingAppointment />,
        },
        {
          path: "CancelAppointment",
          element: <CancelAppointment />,
        },
        {
          path: "CompletedAppointment",
          element: <CompletedAppointment />,
        },
        {
          path: "TodayAppointment",
          element: <TodayAppoinment />,
        }
      ],
    },
    {
      children: [
        {
          path: "/AppointmentCalendar",
          element: <CalendarData />,
        },
      ],
    },
    {
      children: [
        {
          path: "patient-list",
          element: <PatientList />,
        },
        {
          path: "edit-patient/:id",
          element: <EditPatientList />,
        },
        {
          path: "add-patient",
          element: <AddPatient />,
        },
        {
          path: "patient-report/:id",
          element: <PatientReport />,
        },
        {
          path: "PaymentPay/:id",
          element: <PaymentPay />,
        },
        {
          path: "DuePayment/:id",
          element: <DuePayment />,
        },
        {
          path: "PaymentDetails/:id",
          element: <PaymentDetails />,
        },
      ],
    },

    {
      children: [
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "user-score",
          element: <UserScore />,
        },
      ],
    },
    {
      children: [
        {
          path: "appointment",
          element: <AppointmentList />,
        },
        {
          path: "add-appointment",
          element: <AddCategory />,
        },
        {
          path: "edit-appoinment/:id",
          element: <EditAppointment />,
        },
      ],
    },
  ],
};

export default MainRoutes;
