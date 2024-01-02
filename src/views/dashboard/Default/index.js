import { useCallback, useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "./EarningCard";
// import BajajAreaChartCard from "./TotalGrowthBarChart";
// import TotalVoteChart from "./TotalVoteChart";
import { gridSpacing } from "store/constant";
import DashboardApi from "apis/dashboard.api";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
// ==============================|| DEFAULT DASHBOARD ||============================== //
import { useTheme } from "@mui/material/styles";
import TotalLineChartCard from "ui-component/cards/TotalLineChartCard";
import {TotalOrder,TotalUser} from '../../../redux/redux-slice/dashboard.slice'

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardApi = new DashboardApi();
  const [isLoading, setLoading] = useState(true);
  const theme = new useTheme();
  const User = useSelector((state) => state.dashBoard.totalUser);
  const Order = useSelector((state) => state.dashBoard.totalOrder);

  const [natural, setNatural] = useState('0');
  const [labgrown, setLabgrown] = useState('0');
  const backColor = "#42032C"
  var UserTotal = {
    month: User.month,
    total: User.total,
    current: User.length != 0 ? User.month[User.month.length - 1] : 0,
    };
  var OrderTotal = {
    month: Order.month,
    total: Order.total,
    current: Order.length != 0 ? Order.month[Order.month.length - 1] : 0,
    };

  const getDashboard = useCallback(async () => {
    try {
      const dashboardData = await dashboardApi.getDashboard();
      if (!dashboardData || !dashboardData.data) {
        return toast.error("No Data  available");
      } else {
        setNatural(dashboardData.data.natural);
        setLabgrown(dashboardData.data.lab);
        dispatch(TotalUser(dashboardData.data.user))
        dispatch(TotalOrder(dashboardData.data.order))
        setLoading(false);
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getDashboard();
  }, []);



  var UserOption = {
    type: "area",
    height: 100,
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#fff"],
      fill: {
        type: "solid",
        opacity: 0.4,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      yaxis: {
        min: 0,
        max: 30,
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: () => "Total User",
          },
        },
        marker: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series1",
        data: UserTotal.month,
      },
    ],
  };
  var OrderOption = {
    type: "area",
    height: 100,
    options: {
      chart: {
        sparkline: {
          enabled: true,
          colors: ["#000"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#fff"],
      fill: {
        type: "solid",
        opacity: 0.4,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      yaxis: {
        min: 0,
        max: 30,
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false,
        },
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: () => "Total Order",
          },
        },
        marker: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "series1",
        data: OrderTotal.month,
      },
    ],
  }
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={6} sm={6} lg={4}>
        <TotalLineChartCard
          // bgColor={theme.palette.common.black}
          bgColor="#5b2548"
          chartData={UserOption}
          title="Total User"
          footerData={[
            {
              value: `${UserTotal.total}`,
              label: "Total User",
            },
            {
              value: `${UserTotal.current}`,
              label: "Current Month User",
            },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6} sm={6} lg={4}>
        <TotalLineChartCard
            bgColor="#5b2548"
          //  bgColor={theme.palette.common.black}
          chartData={OrderOption}
          title="Total Order"
          footerData={[
            {
              value: `${OrderTotal.total}`,
              label: "Total Order",
            },
            {
              value: `${OrderTotal.current}`,
              label: "Current Month Order",
            },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={natural}
              isTitle={`Total Natural`}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={labgrown}
              isTitle={`Total LabGrown`}
            />
          </Grid>
          {/* <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              // isCount={voter}
              isTitle={`Total Voters`}
            />
          </Grid> */}
{/* 
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              // isCount={news}
              isTitle={`Total News`}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              // isCount={task}
              isTitle={`Total Task`}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              // isCount={post}
              isTitle={`Total Post`}
            />
          </Grid> */}

          <Grid item lg={6} md={6} sm={12} xs={12}>
            {/* <BajajAreaChartCard isLoading={isLoading} isData={voterView} /> */}
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            {/* <TotalVoteChart isData={data} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
