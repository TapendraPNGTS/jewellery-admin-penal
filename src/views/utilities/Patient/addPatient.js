import React, { useState, useRef } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
function App() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [age, setAge] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isGenderError, setIsGenderError] = useState(false);
  const [isAgeError, setIsAgeError] = useState(false);
  const [isDiscriptionError, setDiscriptionIsError] = useState(false);

  React.useEffect(() => { }, []);

  const handleError = () => {
    var regName = /[a-z A-Z]$/;
    var regNumber = /^[789]\d{9}$/;
    setName(name.trim())
    setNumber(number.trim())
    setDescription(description.trim())
    if (name.length == 0) {
      setIsNameError(true)
    } else if(!regName.test(name)) {
      setIsNameError(true)
    }else{
      setIsNameError(false)
    }
    if (number.length < 10) {
      setIsPhoneError(true)
    }else if(!regNumber.test(number)) {
      setIsPhoneError(true)
    }
    else {
      setIsPhoneError(false)
    }
    if (gender == "") {
      setIsGenderError(true)
    } else {
      setIsGenderError(false)
    }
    if (age == 0) {
      setIsAgeError(true)
    } else {
      setIsAgeError(false)
    }
    if (description.length == 0) {
      setDiscriptionIsError(true)
    } else {
      setDiscriptionIsError(false)

    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!isPhoneError && !isNameError && !isGenderError && !isAgeError && !isDiscriptionError){
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      name: name,
      phone: number,
      gender: gender,
      age: age,
      description: description,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}addPatient`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code === 200) {
          toast.success("Added Successfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
        }
      })
      .catch((error) => { });
      navigate('/patient-list')
    }
  }

  return (
    <MainCard title="Add Patient">
      <form action="#" onSubmit={handleSubmit}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={6} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="name"
                name="name"
                // {error ? helperText="Incorrect entry." : <></> }
                error={isNameError}
                inputProps={{ maxLength: 60 }}
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
                error={isPhoneError}
                value={number}
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
              }}
                onChange={(e) => { setNumber(e.target.value); }}
                placeholder="Enter Phone"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={3}>
            <Stack>
              <InputLabel required>Gender</InputLabel>
              <Select
              fullWidth
                id="gender"
                name="gender"
                defaultValue='Select'
                displayEmpty
                renderValue={gender !== "" ? undefined : () => "--Select Gender--"}
                value={gender}
                error={isGenderError}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Age</InputLabel>
              <TextField
                fullWidth
                type='number'
                id="age"
                name="age"
                value={age}
                error={isAgeError}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
              }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={12}>
            <Stack>
              <InputLabel required>Description</InputLabel>
              <TextField
                fullWidth
                type='text'
                id="description"
                name="description"
                value={description}
                error={isDiscriptionError}
                multiline={true}
                rows={3}
                inputProps={{ maxLength: 220 }}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
            </Stack>
          </Grid>

        </Grid>
        <br />
        <br></br>
        <center>
           <Button variant="contained" type="submit" onClick={handleError}>
            Add Patient
          </Button>
          
        </center>
      </form>
    </MainCard>
  );
}

export default App;
