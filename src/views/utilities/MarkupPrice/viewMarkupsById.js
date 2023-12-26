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
import Markup from "apis/markup.api";
import { useState } from "react";


function App() {
  const params = useParams();
  const markup = new Markup();
  const dispatch = useDispatch();
  const [rows, setRows] = useState('')
//   const rows = useSelector((state) => state.markup.AllNaturalById);

  const getAllUser = useCallback(async () => {
    try {
      const users = await markup.getAllMarkup({
        id: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        // dispatch(NaturalById(users.data.data));
        setRows(users.data.data[0]);
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

  return (
    <>
        <MainCard>
      <form action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Commission</InputLabel>
              <TextField
                fullWidth
                value={rows.commission ? rows.commission : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Maximum Markup</InputLabel>
              <TextField
                fullWidth
                value={rows.max? rows.max : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Minimum Markup</InputLabel>
              <TextField
                fullWidth
                value={rows.min? rows.min : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Start Date</InputLabel>
              <TextField
                fullWidth
                value={rows.createdAt? formatDate(rows.createdAt) : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Current Update</InputLabel>
              <TextField
                fullWidth
                value={rows.updatedAt? formatDate(rows.updatedAt) : '-'}
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
