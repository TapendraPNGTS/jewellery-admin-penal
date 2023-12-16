import React, { useState } from "react";
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

  const [openTiming, setOpenTiming] = useState("0");
  const [closeTiming, setCloseTiming] = useState("0");
  const [commission, setCommission] = useState("0");
  const [isMinMarkError, setIsMinMarkError] = useState(false);
  const [isMaxMarkError, setIsMaxMarkError] = useState(false);
  const [isCommiError, setIsCommiError] = useState(false);


  
  const handleError = () => {
    setOpenTiming(openTiming.trim())   
    setCloseTiming(closeTiming.trim())   
    setCommission(commission.trim())   

    if (openTiming.length < 1) {
      setIsMinMarkError(true)
    } 
    else {
      setIsMinMarkError(false)
    }
    
    if (closeTiming < 1) {
      setIsMaxMarkError(true)
    } 
    else {
      setIsMaxMarkError(false)
    }

    if (commission < 0  && !commission) {
      setIsCommiError(true)
    } 
    else {
      setIsCommiError(false)
    }
  }

  

  async function handleSubmit(event) {
    event.preventDefault();
    if(!isCommiError && !isMaxMarkError && !isMinMarkError){
    const addUserResponse = await userApi.addUser({
      openTiming,
      closeTiming,
      commission
    });
    // if (addUserResponse && addUserResponse?.data?.code === 200) {
    //   toast.success(`Added successsfully`);
    //   navigate("/user", { replace: true });
    // } else {
    //   return toast.error(`Something went wrong!`);
    // }
  }
  }

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
              <InputLabel required>Open Time</InputLabel>
              <TextField
                fullWidth
                id="min-markup"
                name="minimum"
                type="time"
                value={openTiming}
                error={isMinMarkError}
               maxLength={10}
                onChange={(e) => {
                  setOpenTiming(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Close Time</InputLabel>
              <TextField
                fullWidth
                id="max-markup"
                name="maximum"
                type="time"
                error={isMaxMarkError}
                value={closeTiming}
                onChange={(e) => {
                  setCloseTiming(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Commission</InputLabel>
              <TextField
                fullWidth
                id="commission"
                name="commission"
                type="number"
                value={commission}
                error={isCommiError}
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
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
