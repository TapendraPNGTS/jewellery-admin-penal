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
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const dashboardApi = new DashboardApi();

  const [volunteer, setVolunteer] = useState(0);
  const [booth, setBooth] = useState(0);
  const [voter, setVoter] = useState(0);
  const [news, setNews] = useState(0);
  const [task, setTask] = useState(0);
  const [post, setPost] = useState(0);
  const [data, setData] = useState([]);
  const [voterView, setVoterView] = useState([]);

  const getDashboard = useCallback(async () => {
    try {
      const dashboardData = await dashboardApi.getDashboard();

      if (!dashboardData || !dashboardData.data.data) {
        return toast.error("No Data  available");
      } else {
        setVolunteer(dashboardData.data.data.volunteer);
        setBooth(dashboardData.data.data.booth);
        setVoter(dashboardData.data.data.voter.allVoter);
        setNews(dashboardData.data.data?.news);
        setTask(dashboardData.data.data?.task);
        setPost(dashboardData.data.data?.post);
        setData([
          dashboardData.data.data.percentages.percentageMen,
          dashboardData.data.data.percentages.percentageWomen,
        ]);
        setVoterView(dashboardData.data.data.voterView);
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

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={volunteer}
              isTitle={`Total Volunter`}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={booth}
              isTitle={`Total booth`}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={voter}
              isTitle={`Total Voters`}
            />
          </Grid>

          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={news}
              isTitle={`Total News`}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={task}
              isTitle={`Total Task`}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard
              isLoading={isLoading}
              isCount={post}
              isTitle={`Total Post`}
            />
          </Grid>

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
