import React, { useEffect, useCallback, useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import DaimondsApi from "apis/daimonds.api";
// import BoothApi from "apis/booth.api";
import { useDispatch, useSelector } from "react-redux";
// import { LabgrownByIdEdit } from "../../../redux/redux-slice/daimonds.slice";

import { Button, Grid, Stack, TextField } from "@mui/material";

function AddUser() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const daimondsApi = new DaimondsApi();

  // const rows = useSelector((state) => state.daimonds.AllLabgrownByIdEdit);

  const [carat, setCarat] = useState("-");
  const [color, setColor] = useState("-");
  const [clarity, setClarity] = useState("-");
  const [cut, setCut] = useState("-");
  const [discount, setDiscount] = useState("-");
  const [country, setCountry] = useState("-");
  const [state, setState] = useState("-");
  const [measurmentsHeight, setMeasurmentsHeight] = useState("-");
  const [measurmentsWidth, setMeasurmentsWidth] = useState("-");
  const [measurmentsLength, setMeasurmentsLength] = useState("-");
  const [naturalFancyColor, setNaturalFancyColor] = useState("-");
  const [naturalFancyColorIntensity, setNaturalFancyColorIntensity] = useState("-");
  const [pricePerCarat, setPricePerCarat] = useState("-");
  const [enhancement, setEnhancement] = useState("-");
  const [totalPrice, setTotalPrice] = useState(" -");
  const [certificateNumber, setCertificateNumber] = useState("-");

  const getAllUser = useCallback(async () => {
    // event.preventDefault();
    try {
      const users = await daimondsApi.getLabgrownById({
        id: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        setCertificateNumber(users.data.data.certificateNumber);
        setTotalPrice(users.data.data.totalPrice);
        setEnhancement(users.data.data.enhancement);
        setPricePerCarat(users.data.data.pricePerCarat);
        setNaturalFancyColorIntensity(
          users.data.data.naturalFancyColorIntensity
        );
        setNaturalFancyColor(users.data.data.naturalFancyColor);
        setMeasurmentsLength(users.data.data.measurmentsLength);
        setMeasurmentsWidth(users.data.data.measurmentsWidth);
        setMeasurmentsHeight(users.data.data.measurmentsHeight);
        setState(users.data.data.state);
        setCountry(users.data.data.country);
        setDiscount((users.data.data.discount));
        setCut(users.data.data.cut);
        setClarity(users.data.data.clarity);
        setColor(users.data.data.color);
        setCarat(users.data.data.carat);
        // dispatch(LabgrownByIdEdit(users.data.data));
        return toast.success("Latest data available");
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  const updateDaimond = async(event) =>{
    // event.preventDefault();
    const addUserResponse = await daimondsApi.getLabgrownEdit({
      id: params.id,
      discount: discount,
    });
    if (addUserResponse && addUserResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/labgrown-daimonds", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <MainCard>
      <form onSubmit={updateDaimond} action="#">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Carat</InputLabel>
            <TextField
              fullWidth
              id="email"
              name="email"
              value={carat}
              onChange={(e) => {
                setCarat(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Color</InputLabel>
            <TextField
              fullWidth
              id="email"
              name="email"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Clarity</InputLabel>
            <TextField
              fullWidth
              value={clarity}
              onChange={(e) => {
                setClarity(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Cut</InputLabel>
            <TextField
              fullWidth
              value={cut}
              onChange={(e) => {
                setCut(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Discount %</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={discount}
              onChange={(e) => {
                setDiscount(e.target.value);
              }}

            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Country</InputLabel>
            <TextField
              fullWidth
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>State</InputLabel>
            <TextField
              fullWidth
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Height</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={measurmentsHeight}
              onChange={(e) => {
                setMeasurmentsHeight(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Width</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={measurmentsWidth}
              onChange={(e) => {
                setMeasurmentsWidth(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Length</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={measurmentsLength}
              onChange={(e) => {
                setMeasurmentsLength(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Fancy Color</InputLabel>
            <TextField
              fullWidth
              value={naturalFancyColor}
              onChange={(e) => {
                setNaturalFancyColor(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Fancy Color Intensity</InputLabel>
            <TextField
              fullWidth
              value={naturalFancyColorIntensity}
              onChange={(e) => {
                setNaturalFancyColorIntensity(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>PricePerCarat $</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={pricePerCarat}
              onChange={(e) => {
                setPricePerCarat(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>enhancement</InputLabel>
            <TextField
              fullWidth
              value={enhancement}
              onChange={(e) => {
                setEnhancement(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Certificate Number</InputLabel>
            <TextField
              fullWidth
              value={certificateNumber}
              onChange={(e) => {
                setCertificateNumber(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Total Price $</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={totalPrice}
              onChange={(e) => {
                setTotalPrice(e.target.value);
              }}
              disabled
            />
          </Stack>
        </Grid>

        {/* <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel >Weigth</InputLabel>
              <TextField
                fullWidth
                id="email"
                name="email"
                // value={weigth}
                onChange={(e) => {
                  // setWeigth(e.target.value);
                }}
              />
            </Stack>
          </Grid> */}
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
