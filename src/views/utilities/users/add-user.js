import React from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import UserApi from "apis/user.api";

import {
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";

function AddUser() {
  const navigate = useNavigate();

  const userApi = new UserApi();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  

  async function handleSubmit(event) {
    event.preventDefault();
    const addUserResponse = await userApi.addUser({
      firstName,
      lastName,
      email,
      number,
    });
    if (addUserResponse && addUserResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/user", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>First Name</InputLabel>
              <TextField
                fullWidth
                id="fname"
                name="fname"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Stack>
          </Grid>
        {/* <Grid container spacing={gridSpacing}> */}
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Last Name</InputLabel>
              <TextField
                fullWidth
                id="lname"
                name="lname"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Email</InputLabel>
              <TextField
                fullWidth
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Number</InputLabel>
              <TextField
                fullWidth
                id="number"
                name="number"
                type="number"
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Password</InputLabel>
              <TextField
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Stack>
          </Grid>

          <br />
        </Grid>
        <br />
        <center>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </center>
      </form>
    </MainCard>
  );
}

export default AddUser;
