import React, { useState, useEffect } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  Button,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
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
  const [isNameError, setIsNameError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isGenderError, setIsGenderError] = useState(false);
  const [isAgeError, setIsAgeError] = useState(false);
  const [isDiscriptionError, setDiscriptionIsError] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("token", localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  const handleError = () => {
    var regName = /[a-z A-Z]$/;
    var regNumber = /^[789]\d{9}$/;
    setName(name.trim())
    setNumber(number.trim())
    setDiscription(discription.trim())
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
    // console.log("Phone number",number);
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
    if (discription.length == 0) {
      setDiscriptionIsError(true)
    } else {
      setDiscriptionIsError(false)

    }
  }

  function getalldata() {
    handleError();
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      name: name,
      phone: number,
      gender: gender,
      age: age,
      description: discription,
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
        setName(result.data.name);
        setNumber(result.data.number);
        setGender(result.data.gender);
        setAge(result.data.age);
        setDiscription(result.data.discription);
      })
      .catch((error) => console.log("error", error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!isPhoneError && !isNameError && !isGenderError && !isAgeError && !isDiscriptionError){
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
  }
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
    <MainCard title="Edit Patient">
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
                error={isNameError}
                inputProps={{ maxLength: 60 }}
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
                onChange={(e) => {
                  setNumber(e.target.value);
                  if (e.target.value.length > 10) {
                      setIsError(true);
                  }else{
                    setIsError(false);
                  }
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
                error={isGenderError}
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
                type='number'
                id="age"
                name="age"
                disabled
                value={age}
                error={isAgeError}
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
              }}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Age"
              />
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
                error={isDiscriptionError}
                onChange={(e) => setDiscription(e.target.value)}
                placeholder="Description"
                inputProps={{ maxLength: 220 }}
                multiline={true}
                rows={3}
              />
            </Stack>
          </Grid>

        </Grid>
        <br />
        <br></br>
        <center>
          <Button variant="contained" type="submit"onClick={() => getalldata()}>
            Upadate Details
          </Button>
        </center>
      </form>
      <br />
      <br />
      <br />
    </MainCard>
  );
}

export default App;
