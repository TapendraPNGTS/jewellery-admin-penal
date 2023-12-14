import React, { useState } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

import {
    Button,
    Grid,
    Stack,
    TextField,
} from "@mui/material";
function DuePaymentPay() {
    const navigate = useNavigate();
    const params = useParams();
    const [isAmountError, setIsAmountError] = useState(false);
    const [due, setDue] = useState()
    // const [oldDue, setOldDue] = useState()


    React.useEffect(() => { }, []);

    const handleError = () => {
        if (due > 0) {
            setIsAmountError(false)
        }
        else {
            setIsAmountError(true)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!isAmountError) {
            var myHeaders = new Headers();
            myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
            myHeaders.append("token", localStorage.getItem("token"));
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                adminId: localStorage.getItem("userId"),
                appointmentId: params.id,
                due: due,
            });

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            fetch(`${process.env.REACT_APP_API_URL}updateAppointmentDue`, requestOptions)
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
        <MainCard title="Due Amount">
            <form action="#" onSubmit={handleSubmit}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={6} md={6}>
                        <Stack>
                            <InputLabel required>Due Amount</InputLabel>
                            <TextField
                                fullWidth
                                type="number"
                                id="due"
                                name="due"
                                error={isAmountError}
                                onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value)).slice(0, 5)
                                }}
                                // value={name}
                                onChange={(e) => setDue(e.target.value)}
                                placeholder="Due Amount"
                            />
                        </Stack>
                    </Grid>
                </Grid>
                <br />
                <br></br>
                <center>
                    <Button variant="contained" type="submit" onClick={handleError}>
                        Add Amount
                    </Button>

                </center>
            </form>
        </MainCard>
    );
}

export default DuePaymentPay;
