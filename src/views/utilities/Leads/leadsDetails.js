import React, { useEffect, useCallback } from "react";
// material-ui
import {
  Grid,
  Stack,
  InputLabel,
  TextField,
  TextareaAutosize,
} from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { LeadsDetailsById } from "redux/redux-slice/orders.slice";
import Markup from "apis/order.api";
import { useState } from "react";

function App() {
  const params = useParams();
  const markup = new Markup();
  const dispatch = useDispatch();
  const getAllUser = useCallback(async () => {
    try {
      const users = await markup.getLeadsById({
        leadId: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        dispatch(LeadsDetailsById(users.data.data));
        return toast.success("Latest data available");
        // return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });
  const rows = useSelector((state) => state.orders.leadsDetailsById);
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
                <InputLabel >Name</InputLabel>
                <TextField
                  fullWidth
                  value={rows?.name ? rows.name : "-"}
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <InputLabel >Email</InputLabel>
                <TextField
                  fullWidth
                  value={rows?.email ? rows.email : "-"}
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack>
                <InputLabel >Subject</InputLabel>
                <TextField
                  fullWidth
                  value={rows?.subject ? rows.subject : "-"}
                  disabled
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={12} h={"50pc"}>
              <Stack>
                <InputLabel >Message</InputLabel>
                <TextareaAutosize
                  style={{ width: "100%" }}
                  minRows={4} // Adjust the number of rows as needed
                  value={rows?.message ? rows.message : "-"}
                  disabled
                />
              </Stack>
            </Grid>
          </Grid>
        </form>
      </MainCard>
    </>
  );
}

export default App;
