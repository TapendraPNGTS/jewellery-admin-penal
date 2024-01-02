import React ,{ useEffect, useCallback } from "react";
// material-ui
import { Grid, Stack, InputLabel, TextField   } from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import { NaturalById } from "redux/redux-slice/markups.slice";
import ShopTime from "apis/shoptime.api";
import { useState } from "react";


function App() {
  const params = useParams();
  const shopTime = new ShopTime();
  const dispatch = useDispatch();
  const [rows, setRows] = useState('')
  const [week, setWeek] = useState('')
  const [weekEnd, setWeekEnd] = useState('')

//   const rows = useSelector((state) => state.markup.AllNaturalById);

  const getAllUser = useCallback(async () => {
    try {
      const users = await shopTime.getShopById({
        userId: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        // dispatch(NaturalById(users.data.data));
        setRows(users.data.data[0]);
        setWeek(users.data.data.week);
        setWeekEnd(users.data.data.weekEnd)
        return toast.success("Latest data available");
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  useEffect(() => {
    getAllUser();
  }, []); 

  function formatDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  function formatTime(time) {
    return new Date(time).toLocaleString("en-us", {
      hour: "numeric",
      minute: "numeric",
      // second: "numeric",
    });
  }
 

  return (
    <>
        <MainCard>
      <form action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Start Time</InputLabel>
              <TextField
                fullWidth
                value={week?.startTime ? formatTime(week.startTime) : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>End Time</InputLabel>
              <TextField
                fullWidth
                value={week?.endTime ? formatTime(week.endTime) : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Start Working Day</InputLabel>
              <TextField
                fullWidth
                value={week?.start ? week.start : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>End Working Day</InputLabel>
              <TextField
                fullWidth
                value={week?.end ? week.end : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Start Leave Day</InputLabel>
              <TextField
                fullWidth
                value={weekEnd.start ? weekEnd.start : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>End Leave Day</InputLabel>
              <TextField
                fullWidth
                value={weekEnd.end ? weekEnd.end : '-'}
                disabled
              />
            </Stack>
          </Grid>
        </Grid>
        {/* <br /> */}
        {/* <center>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </center> */}
      </form>
    </MainCard>
    </>
  );
}

export default App;
