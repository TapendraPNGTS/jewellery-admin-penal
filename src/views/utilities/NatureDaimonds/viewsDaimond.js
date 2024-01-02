import React ,{ useEffect, useCallback } from "react";
// material-ui
import { Grid, Stack, InputLabel, TextField   } from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { NaturalById } from "redux/redux-slice/daimonds.slice";
import Daimonds from "apis/daimonds.api";


function App() {
  const params = useParams();
  const daimonds = new Daimonds();
  const dispatch = useDispatch();

  const rows = useSelector((state) => state.daimonds.AllNaturalById);
  const getAllUser = useCallback(async () => {
    try {
      const users = await daimonds.getNaturalById({
        id: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        dispatch(NaturalById(users.data.data));
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
    <>
        <MainCard>
      <form action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Item Id</InputLabel>
              <TextField
                fullWidth
                value={rows.itemId? rows.itemId : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Carat</InputLabel>
              <TextField
                fullWidth
                value={rows.carat? rows.carat : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Certificate Number</InputLabel>
              <TextField
                fullWidth
                value={rows.certificateNumber? rows.certificateNumber : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Clarity</InputLabel>
              <TextField
                fullWidth
                value={rows.clarity? rows.clarity : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Cut</InputLabel>
              <TextField
                fullWidth
                value={rows.cut? rows.cut : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Total Price</InputLabel>
              <TextField
                fullWidth
                value={rows.totalPrice? rows.totalPrice : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>State</InputLabel>
              <TextField
                fullWidth
                value={rows.state? rows.state : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Price Per Carat</InputLabel>
              <TextField
                fullWidth
                value={rows.pricePerCarat? rows.pricePerCarat : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Natural FancyColor Intensity</InputLabel>
              <TextField
                fullWidth
                value={rows.naturalFancyColorIntensity? rows.naturalFancyColorIntensity : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Natural Fancy Color</InputLabel>
              <TextField
                fullWidth
                value={rows.naturalFancyColor? rows.naturalFancyColor : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Measurments Width</InputLabel>
              <TextField
                fullWidth
                value={rows.measurmentsWidth? rows.measurmentsWidth : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Measurments Length</InputLabel>
              <TextField
                fullWidth
                value={rows.measurmentsLength? rows.measurmentsLength : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Measurments Height</InputLabel>
              <TextField
                fullWidth
                value={rows.measurmentsHeight? rows.measurmentsHeight : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Discount</InputLabel>
              <TextField
                fullWidth
                value={rows.discount? rows.discount : '-'}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Guaranteed Availability</InputLabel>
              <TextField
                fullWidth
                value={rows.guaranteedAvailability? rows.guaranteedAvailability : '-'}
                disabled
              />
            </Stack>
            </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Grading Lab</InputLabel>
              <TextField
                fullWidth
                value={rows.gradingLab? rows.gradingLab : '-'}
                disabled
              />
            </Stack>
            </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Enhancement</InputLabel>
              <TextField
                fullWidth
                value={rows.enhancement? rows.enhancement : '-'}
                disabled
              />
            </Stack>
          </Grid>
        </Grid>
        <br />
        {/* <center>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </center> */}
      </form>
    </MainCard>
    </>
  );
}

export default App;
