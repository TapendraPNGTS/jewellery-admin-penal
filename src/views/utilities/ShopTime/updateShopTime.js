import React ,{ useEffect, useCallback, useState } from "react";
// material-ui
import { Grid, Stack, InputLabel, TextField, Button,Select, MenuItem } from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { toast } from "react-hot-toast";
import ShopTime from "apis/shoptime.api";
import { useNavigate, useParams } from "react-router-dom";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from 'dayjs';



function App() {
  const params = useParams();
  const shopTime = new ShopTime();
  const navigate = useNavigate();
  const [defaultTime , setDefaultTime] = useState('') // Replace with your default time
  const [defaultOffTime , setDefaultOffTime] = useState('') // Replace with your default time
  const [openTiming, setOpenTiming] = useState("");
  const [closeTiming, setCloseTiming] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [LeaveStart, setLeaveStart] = useState("");
  const [LeaveendDay, setLeaveEndtDay] = useState("");
  const [activeTime, setActiveTime] = useState('false');
  const setting = {
    flexDirection: 'column !important',
  };
  
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const week = {
    start: startDay,
    end: endDay,
    startTime: openTiming,
    endTime: closeTiming,
  }
  const weekEnd  = {
    start: LeaveStart,
    end: LeaveendDay,
    startTime: openTiming,
    endTime: closeTiming,
  }
  const getAllUser = useCallback(async () => {
    try {
      const users = await shopTime.getShopById({
        timeId: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        setStartDay(users.data.data.week.start);
        setEndDay(users.data.data.week.end);
        setLeaveStart(users.data.data.weekEnd.start);
        setLeaveEndtDay(users.data.data.weekEnd.end);
        setDefaultTime(users.data.data.week.startTime);
        setDefaultOffTime(users.data.data.week.endTime);
        setActiveTime(users.data.data.isActive);
        return toast.success("Latest data available");
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  async function  updateMarkups(event) {
    event.preventDefault();
      const addUserResponse = await shopTime.getEditShop({
      timeId: params.id,
      week: week,
      weekEnd: weekEnd,
      active: activeTime,
    });
    if (addUserResponse && addUserResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/shoptime-history", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }  
  useEffect(() => {
    getAllUser();
    setOpenTiming(dayjs(defaultTime));
    setCloseTiming(dayjs(defaultOffTime));
  }, [defaultTime,defaultOffTime]); 
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
      // second: null,
    });
  }

  return (
    <>
        <MainCard>
      <form onSubmit={updateMarkups} action="#">
      <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Open Time</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    label="Start Day Time"
                    value={openTiming}
                    onChange={(newTime) => {
                      
                      formatTime(setOpenTiming(newTime));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    {...setting}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Close Time</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    label="End Day Time"
                    value={closeTiming}
                    onChange={(newTime) => formatTime(setCloseTiming(newTime))}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Start Work day</InputLabel>
              <Select
                fullWidth
                id="commission"
                name="commission"
                value={startDay}
                onChange={(e) => {
                  setStartDay(e.target.value);
                }}
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>End work day</InputLabel>
              <Select
                fullWidth
                id="commission"
                name="commission"
                value={endDay}
                onChange={(e) => {
                  setEndDay(e.target.value);
                }}
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Start week day</InputLabel>
              <Select
                fullWidth
                id="commission"
                name="commission"
                value={LeaveStart}
                onChange={(e) => {
                  setLeaveStart(e.target.value);
                }}
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>End week day</InputLabel>
              <Select
                fullWidth
                id="commission"
                name="commission"
                value={LeaveendDay}
                onChange={(e) => {
                  setLeaveEndtDay(e.target.value);
                }}
                // error={isEndDayError}
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {day}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Active Time</InputLabel>
              <Select
                fullWidth
                id="activeTime"
                name="activeTime"
                value={activeTime}
                onChange={(e) => {
                  setActiveTime(e.target.value);
                }}
              >
                <MenuItem value="true">True</MenuItem>
                <MenuItem value="false">False</MenuItem>
              </Select>
            </Stack>
          </Grid>
        </Grid>
        <br />
        <center>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </center>
      </form>
    </MainCard>
    </>
  );
}

export default App;
