import React ,{ useEffect, useCallback } from "react";
// material-ui
import { Grid, Stack, InputLabel, TextField, Button } from "@mui/material";
// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Markup from "apis/markup.api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  const params = useParams();
  const markup = new Markup();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [commission, setCommission] = useState('-')
  const [max, setMax] = useState('-')
  const [min, setMin] = useState('-')
  const [createdAt, setCreatedAt] = useState('-')
  const [updatedAt, setUpdatedAt] = useState('-')
  
  const [isMinMarkError, setIsMinMarkError] = useState(false);
  const [isMaxMarkError, setIsMaxMarkError] = useState(false);
  const [isCommiError, setIsCommiError] = useState(false);

  const getAllUser = useCallback(async () => {
    try {
      const users = await markup.getMarkupById({
        markupId: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        setCommission(users.data.data.commission);
        setMax(users.data.data.max);
        setMin(users.data.data.min);
        setCreatedAt(formatDate(users.data.data.createdAt));
        setUpdatedAt(formatDate(users.data.data.updatedAt));

        return toast.success("Latest data available");
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

  async function updateMarkups(event) {
    event.preventDefault();
    if(!isCommiError && !isMaxMarkError && !isMinMarkError){
    const addUserResponse = await markup.getUpdateMarkup({
      markupId: params.id,
      min : min,
      max: max,
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

  const handleError = () => {
    if (min.length < 1) {
      setIsMinMarkError(true)
    } 
    else {
      setIsMinMarkError(false)
    }
    
    if (max < 1) {
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


  useEffect(() => {
    getAllUser();
  }, []); 
  function formatDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <>
        <MainCard>
      <form onSubmit={updateMarkups} action="#">
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Commission</InputLabel>
              <TextField
                fullWidth
                value={commission}
                type="number"
                onChange={(e) => {
                  setCommission(e.target.value);
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Maximum Markup</InputLabel>
              <TextField
                fullWidth
                value={max}
                type="number"
                onChange={(e) => {
                  setMax(e.target.value);
                }}
                // disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Minimum Markup</InputLabel>
              <TextField
                fullWidth
                id="min-markup"
                name="minimum"
                type="number"
                value={min}
                error={isMinMarkError}
               maxLength={10}
                onChange={(e) => {
                  setMin(e.target.value);
                }}
                // disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Start Date</InputLabel>
              <TextField
                fullWidth
                value={createdAt}
                onChange={(e) => {
                  setCreatedAt(e.target.value);
                }}
                disabled
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack>
              <InputLabel required>Current Update</InputLabel>
              <TextField
                fullWidth
                value={updatedAt}
                onChange={(e) => {
                  setUpdatedAt(e.target.value);
                }}
                disabled
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
    </>
  );
}

export default App;
