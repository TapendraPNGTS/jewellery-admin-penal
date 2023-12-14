import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Box,FormControl,
} from "@mui/material";

function App() {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [discription, setDiscription] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [isError, setIsError] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [time, setTime] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [isNameError, setIsNameError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isGenderError, setIsGenderError] = useState(false);
  const [isAgeError, setIsAgeError] = useState(false);
  const [isTimeError, setIsTimeError] = useState(false);
  const [isDiscriptionError, setDiscriptionIsError] = useState(false);
  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("token", localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  const handleTimeChange = (time) => {
    setTime(time);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleError = () => {
    if (name.length == 0) {
      setIsNameError(true)
    } else {
      setIsNameError(false)
    }
    if (number.length < 10) {
      setIsPhoneError(true)
    } else {
      setIsPhoneError(false)
    }
    if (gender == null) {
      setIsGenderError(true)
    } else {
      setIsGenderError(false)
    }
    if (age == 0) {
      setIsAgeError(true)
    } else {
      setIsAgeError(false)
    }
    if (time.length == "") {
      setIsTimeError(true)
    } else {
      setIsTimeError(false)
    }

    if (discription.length == 0) {
      setDiscriptionIsError(true)
    } else {
      setDiscriptionIsError(false)

    }
  }

  function getalldata() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      name: name,
      phone: number,
      gender: gender,
      age: age,
      description: discription,
      date: date,
      time: time,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}updatePatient`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
      })
      .catch((error) => console.log("error", error));
  }
  function handleSubmit(event) {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
    // var formdata = new FormData();
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      patientId: params.id,
      name: name,
      phone: number,
      gender: gender,
      age: age,
      description: discription,
      date: date,
      time: time,
    });


    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      // redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}updatePatient`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          navigate("/patient-list");
          toast.success(result.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error(result.message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      })
      .catch((error) => {});
    handleError();
  }


  function getPatientById() {
    var raw = JSON.stringify({
      "adminId": localStorage.getItem("userId"),
      "patientId": params.id,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch(`${process.env.REACT_APP_API_URL}getPatientById`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        console.log(result.data)
        setName(result.data.Name);
        setNumber(result.data.Phone);
        setGender(result.data.Gender);
        setAge(result.data.Age);
        setDiscription(result.data.Description);

      })
      .catch(error => {

      });
  }

  useEffect(() => {
    getPatientById()
  }, []);
  return (
    <MainCard title="Edit Appoinmnet">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Phone Number</InputLabel>
              <TextField
                fullWidth
                type="number"
                error={isError}
                value={number}
                
                onChange={(e) => {
                  setNumber(e.target.value);
                  if (e.target.value.length > 10) {
                      setIsError(true);
                  }else{
                    setIsError(false);
                  }

                  // if(e.target.value.length == 10){
                  // }
              }}
                placeholder="Enter Phone"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack>
              <InputLabel required>Gender</InputLabel>
              <Select
                id="gender"
                name="gender"
                placeholder="Select Gender"
                defaultValue='Select'
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="" disabled >Select Gender</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack>
              <InputLabel required>Age</InputLabel>
              <TextField
                fullWidth
                type='text'
                id="age"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack>
              <InputLabel required>Date</InputLabel>
               <DatePicker
                fullWidth
                className="date-picker"
                id="date"
                name="date"
                value={date}
                selected={date}
                minDate={new Date()}
                onChange={handleDateChange}
              />
              
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack>
              <InputLabel required>Time</InputLabel>
              {/* <TimePicker
                fullWidth
                className="date-picker"
                type='text'
                id="time"
                name="time"
                value={time}
                error={isTimeError}
                onChange={handleTimeChange}
                placeholder="Select Time"
              /> */}
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileTimePicker
                  openTo="hours"
                  type='text'
                  id="time"
                  value={time}
                  error={isTimeError}
                  onChange={handleTimeChange}
                />
              </LocalizationProvider> */}
               <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Time</InputLabel>
                  <Select
                  error={isTimeError}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={time}
                    label="Time"
                    onChange={((e)=>{setTime(e.target.value)})}
                  >
                    <MenuItem value={"10:00"}>10:00 - 10:30 AM</MenuItem>
                    <MenuItem value={"10:30"}>10:30 - 11:00 AM</MenuItem>
                    <MenuItem value={"11:00"}>11:00 - 11:30 AM</MenuItem>
                    <MenuItem value={"11:30"}>11:30 - 11:59 AM</MenuItem>
                    <MenuItem value={"12:00"}>12:00 - 12:30 PM</MenuItem>
                    <MenuItem value={"12:30"}>12:30 - 01:00 PM</MenuItem>
                    <MenuItem value={"01:00"}>01:00 - 01:30 PM</MenuItem>
                    <MenuItem value={"01:30"}>01:30 - 02:00 PM</MenuItem>
                    <MenuItem value={"02:00"}>2:00 - 02:30 PM</MenuItem>
                    <MenuItem value={"02:30"}>2:30 - 03:00 PM</MenuItem>
                    <MenuItem value={"03:00"}>03:00 - 03:30 PM</MenuItem>
                    <MenuItem value={"03:30"}>03:30 - 04:00 PM</MenuItem>
                    <MenuItem value={"04:00"}>04:00 - 04:30 PM</MenuItem>
                    <MenuItem value={'04:30'}>04:30 - 05:00 PM</MenuItem>
                    <MenuItem value={"05:00"}>05:00 - 05:30 PM</MenuItem>
                    <MenuItem value={"05:30"}>05:30 - 06:00 PM</MenuItem>
                    <MenuItem value={"06:00"}>06:00 - 06:30 PM</MenuItem>
                    {/* <MenuItem value={30}>06:30</MenuItem> */}
                    {/* <MenuItem value={30}>07:00</MenuItem>
                    <MenuItem value={10}>07:30</MenuItem>
                    <MenuItem value={20}>08:00</MenuItem>
                    <MenuItem value={30}>08:30</MenuItem> */}
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Description</InputLabel>
              <TextField
                fullWidth
                type='text'
                id="discription"
                name="discription"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                placeholder="Description"
              />
            </Stack>
          </Grid>

        </Grid>
        <br />
        <br></br>
        <center>
          <Button variant="contained" type="submit" onClick={() => getalldata()}>
            Upadate Details
          </Button>
        </center>
      </form>
      <br />
      <br />
      <br />
      <></>      
    </MainCard>
  );
}

export default App;
