import React, { useEffect, useCallback, useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import DaimondsApi from "apis/daimonds.api";
// import BoothApi from "apis/booth.api";
import { useDispatch, useSelector } from "react-redux";
import { LabgrownByIdEdit } from "../../../redux/redux-slice/daimonds.slice";

import { Button, Grid, Stack, TextField } from "@mui/material";

function AddUser() {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const daimondsApi = new DaimondsApi();

  const rows = useSelector((state) => state.daimonds.AllLabgrownByIdEdit);

  const [carat, setCarat] = useState(rows.carat ? rows.carat : "-");
  const [color, setColor] = useState(rows.color ? rows.color : "-");
  const [clarity, setClarity] = useState(rows.clarity ? rows.clarity : "-");
  const [cut, setCut] = useState(rows.cut ? rows.cut : "-");
  const [discount, setDiscount] = useState(rows.discount ? rows.discount : "-");
  const [country, setCountry] = useState(rows.country ? rows.country : "-");
  const [state, setState] = useState(rows.state ? rows.state : "-");
  const [measurmentsHeight, setMeasurmentsHeight] = useState(
    rows.measurmentsHeight ? rows.measurmentsHeight : "-"
  );
  const [measurmentsWidth, setMeasurmentsWidth] = useState(
    rows.measurmentsWidth ? rows.measurmentsWidth : "-"
  );
  const [measurmentsLength, setMeasurmentsLength] = useState(
    rows.measurmentsLength ? rows.measurmentsLength : "-"
  );
  const [naturalFancyColor, setNaturalFancyColor] = useState(
    rows.naturalFancyColor ? rows.naturalFancyColor : "-"
  );
  const [naturalFancyColorIntensity, setNaturalFancyColorIntensity] = useState(
    rows.naturalFancyColorIntensity ? rows.naturalFancyColorIntensity : "-"
  );
  const [pricePerCarat, setPricePerCarat] = useState(
    rows.pricePerCarat ? rows.pricePerCarat : "-"
  );
  const [enhancement, setEnhancement] = useState(
    rows.enhancement ? rows.enhancement : "-"
  );
  const [totalPrice, setTotalPrice] = useState(
    rows.totalPrice ? rows.totalPrice : " -"
  );
  const [certificateNumber, setCertificateNumber] = useState(
    rows.certificateNumber ? rows.certificateNumber : "-"
  );

  const getAllUser = useCallback(async () => {
    // event.preventDefault();
    try {
      const users = await daimondsApi.getLabgrownById({
        id: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        dispatch(LabgrownByIdEdit(users.data.data));
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

  return (
    <MainCard>
      {/* <form onSubmit={handleSubmit} action="#"> */}
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
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Discount</InputLabel>
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
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>PricePerCarat</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={pricePerCarat}
              onChange={(e) => {
                setPricePerCarat(e.target.value);
              }}
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
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <InputLabel>Total Price</InputLabel>
            <TextField
              fullWidth
              type="number"
              value={totalPrice}
              onChange={(e) => {
                setTotalPrice(e.target.value);
              }}
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
      {/* </form> */}
    </MainCard>
  );
}

export default AddUser;
