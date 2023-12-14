import React, { useEffect, useCallback } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import UserApi from "apis/user.api";
// import BoothApi from "apis/booth.api";
import { useDispatch, useSelector } from "react-redux";
import { updateAllBooth } from "redux/redux-slice/booth.slice";
import {
  Button,
  Grid,
  Stack,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";

function AddUser() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const userApi = new UserApi();
  const boothApi = new BoothApi();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [type, setType] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [booth, setBooth] = React.useState([]);
  const booths = useSelector((state) => state.booth.Booth);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChanged = (event) => {
    const { value } = event.target;
    setBooth(typeof value === "string" ? value.split(",") : value);
  };
  async function handleSubmit(event) {
    event.preventDefault();

    const editUserResponse = await userApi.editUser({
      userId: params.id,
      name,
      email,
      type,
      number,
      booth,
    });
    if (editUserResponse && editUserResponse?.data?.code === 200) {
      toast.success(`Updated successsfully`);
      navigate("/user", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }
  const getUserById = useCallback(async () => {
    try {
      const getUserByIdResponse = await userApi.getUserById({
        userId: params.id,
      });
      if (getUserByIdResponse && getUserByIdResponse?.data?.code === 200) {
        setName(getUserByIdResponse.data.data.name);
        setEmail(getUserByIdResponse.data.data.email);
        setNumber(getUserByIdResponse.data.data.number);
        setType(getUserByIdResponse.data.data.type);
        setBooth(getUserByIdResponse.data.data.booth);
      } else {
        return toast.error(`Something went wrong!`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });
  // const getAllBooth = useCallback(async () => {
  //   try {
  //     const getAllBoothResponse = await boothApi.getAllBooth();
  //     if (getAllBoothResponse && getAllBoothResponse?.data?.code === 200) {
  //       dispatch(updateAllBooth(getAllBoothResponse.data.data));
  //     } else {
  //       return toast.error(`Something went wrong!`);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Something went wrong");
  //     throw error;
  //   }
  // });
  // useEffect(() => {
  //   getUserById();
  //   if (booths.length === 0) {
  //     getAllBooth();
  //   }
  // }, []);

  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Name</InputLabel>
              <TextField
                fullWidth
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
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
              <InputLabel required>Type</InputLabel>
              <Select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <MenuItem value={0} disabled>
                  Select Type
                </MenuItem>
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Volunteer"}>Volunteer</MenuItem>
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Select Booth</InputLabel>
              <Select
                fullWidth
                id="booth"
                name="booth"
                value={booth}
                multiple
                onChange={handleChanged}
                MenuProps={MenuProps}
              >
                {booths.map((row, index) => (
                  <MenuItem value={row.boothId} key={index}>
                    {row.title}
                  </MenuItem>
                ))}
              </Select>
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
