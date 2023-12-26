import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import UserApi from "apis/markup.api";

import {
  Button,
  Grid,
  Stack,
  TextField,
} from "@mui/material";

function AddUser() {
  const navigate = useNavigate();
  const userApi = new UserApi();

  const [minMarkup, setMinMarkup] = useState("0");
  const [maxMarkup, setMaxMarkup] = useState("0");
  const [commission, setCommission] = useState("0");
  const [isMinMarkError, setIsMinMarkError] = useState(false);
  const [isMaxMarkError, setIsMaxMarkError] = useState(false);
  const [isCommiError, setIsCommiError] = useState(false);


  
  const handleError = () => {
    setMinMarkup(minMarkup.trim())   
    setMaxMarkup(maxMarkup.trim())   
    setCommission(commission.trim())   

    if (minMarkup.length < 1) {
      setIsMinMarkError(true)
    } 
    else {
      setIsMinMarkError(false)
    }
    
    if (maxMarkup < 1) {
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
    const addUserResponse = await userApi.getAddMarkup({
      min:minMarkup,
      max:maxMarkup,
      commission:commission,
    });
    if (addUserResponse && addUserResponse?.data?.code === 200) {
      toast.success(`Added successsfully`);
      navigate("/all-markups", { replace: true });
    } else {
      return toast.error(`Something went wrong!`);
    }
  }
  }

  return (
    <MainCard>
      <form onSubmit={handleSubmit} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Minimum $</InputLabel>
              <TextField
                fullWidth
                id="min-markup"
                name="minimum"
                type="number"
                value={minMarkup}
                error={isMinMarkError}
               maxLength={10}
                onChange={(e) => {
                  setMinMarkup(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>maximum $</InputLabel>
              <TextField
                fullWidth
                id="max-markup"
                name="maximum"
                type="number"
                error={isMaxMarkError}
                value={maxMarkup}
                onChange={(e) => {
                  setMaxMarkup(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Commission %</InputLabel>
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
