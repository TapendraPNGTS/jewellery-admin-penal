import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ShopApi from "apis/shoptime.api";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import {
  Button,
  Grid,
  Stack,
  TextField,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

function AddUser() {
  const navigate = useNavigate();
  const shopApi = new ShopApi();
  const [openTiming, setOpenTiming] = useState("");
  const [closeTiming, setCloseTiming] = useState("");
  const [startDay, setStartDay] = useState("Monday");
  const [endDay, setEndtDay] = useState("Friday");
  const [LeaveStart, setLeaveStart] = useState("Saturday");
  const [LeaveendDay, setLeaveEndtDay] = useState("Sunday");
  const [isMinMarkError, setIsMinMarkError] = useState(false);
  const [isMaxMarkError, setIsMaxMarkError] = useState(false);
  const [isStartDayError, setIsStartDayError] = useState(false);
  const [isEndDayError, setIsEndDayError] = useState(false);

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

  const handleError = () => {   
    if (openTiming.length < 1) {
      setIsMinMarkError(true);
    } else {
      setIsMinMarkError(false);
    }

    if (closeTiming.length < 1) {
      setIsMaxMarkError(true);
    } else {
      setIsMaxMarkError(false);
    }

    if (startDay < 0 && !startDay) {
      setIsStartDayError(true);
    } else {
      setIsStartDayError(false);
    }
    if (endDay < 0 && !endDay) {
      setIsEndDayError(true);
    } else {
      setIsEndDayError(false);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!isStartDayError && !isMaxMarkError && !isMinMarkError && !isEndDayError) {
      const addUserResponse = await shopApi.getAddShop({
        week: week,
        weekEnd: weekEnd,
      });
      if (addUserResponse && addUserResponse?.data?.code === 200) {
        toast.success(`Added successsfully`);
        navigate("/shoptime-history", { replace: true });
      } else {
        return toast.error(`Something went wrong!`);
      }
    }
  }
  function formatTime(time) {
    return new Date(time).toLocaleString("en-us", {
      hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
    });
  }
  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Open Time</InputLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker
                    label="Start Day Time"
                    value={openTiming ? openTiming.format('hh:mm A') : ''}
                    // value={openTiming}
                    onChange={(newTime) => {
                      // const formattedTime = newTime ? newTime.format('hh:mm A') : '';
                      formatTime(setOpenTiming(newTime));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    error={isMinMarkError}
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
                    error={isMinMarkError}
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
                error={isStartDayError}
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
                  setEndtDay(e.target.value);
                }}
                error={isEndDayError}
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
                error={isStartDayError}
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
        </Grid>
        <br />
        <center>
          <Button variant="contained" type="submit" onClick={handleError}>
            Submit
          </Button>
        </center>
      </form>
    </MainCard>
  );
}

export default AddUser;
