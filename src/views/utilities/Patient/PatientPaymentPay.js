import React, { useState, useRef } from "react";
import MainCard from "ui-component/cards/MainCard";
import InputLabel from "ui-component/extended/Form/InputLabel";
import { gridSpacing } from "store/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import { useParams } from "react-router-dom";
import {
    Button,
    Grid,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";

function PaymentPay() {
    const navigate = useNavigate();
    const params= useParams();
    // const [name, setName] = React.useState("");
    const [isAmountError, setIsAmountError] = useState(false);
    const [payAmount, setPayAmount] = useState(0)
    const [due, setDue] = useState()
    const [paymentType, setPaymentType] = useState("upi")
    // const [isDueAmountError, setIsDueAmountError] = useState(false);


    React.useEffect(() => { }, []);
    const handleError = () => {
        if (payAmount > 0) {
            setIsAmountError(false)
            console.log("Payamount : true  ",payAmount)    
        }
        else {
            console.log("Payamount : False  ",payAmount)
            setIsAmountError(true)
        }
        // if (due > 0) {
        //     setIsAmountError(false)
        // }
        // else {
        //     setIsAmountError(true)
        // }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!isAmountError) 
        {
            var myHeaders = new Headers();
            myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
            myHeaders.append("token", localStorage.getItem("token"));
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                adminId: localStorage.getItem("userId"),
                appointmentId: params.id,
                due: due,
                amount : payAmount,
                // type : paymentType,
            });

            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            };

            fetch(`${process.env.REACT_APP_API_URL}updateAppointmentAmount`, requestOptions)
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
        <MainCard title="Add Amount">
            <form action="#" onSubmit={handleSubmit}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={6} md={6}>
                        <Stack>
                            <InputLabel required>Payment Method</InputLabel>
                            <Select
                                fullWidth
                                id="paymentType"
                                name="paymentType"
                                defaultValue='upi'
                                displayEmpty
                                renderValue={paymentType !== "" ? undefined : () => "--Payment Method--"}
                                // value={payment}
                                onChange={(e) => setPaymentType(e.target.value)}
                            >
                                <MenuItem value="upi">UPI</MenuItem>
                                <MenuItem value="cash">Cash</MenuItem>
                                <MenuItem value="partial">partial</MenuItem>
                            </Select>
                        </Stack>
                    </Grid>
                    {paymentType === "upi" ? (
                        <Grid item xs={6} md={6}>
                            <Stack>
                                <InputLabel required>Payment Amount</InputLabel>
                                <TextField
                                    fullWidth
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    error={isAmountError}
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).slice(0, 5)
                                    }}
                                    // value={name}
                                    onChange={(e) => setPayAmount(e.target.value)}
                                    placeholder="Enter Amount"
                                />
                            </Stack>
                        </Grid>
                    ) : paymentType === "cash" ? (
                        <Grid item xs={6} md={6}>
                            <Stack>
                                <InputLabel required>Payment Amount</InputLabel>
                                <TextField
                                    fullWidth
                                    type="number"
                                    id="amount"
                                    // name="name"
                                    error={isAmountError}
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).slice(0, 5)
                                    }}
                                    inputProps={{ maxLength: 60 }}
                                    // value={name}
                                    onChange={(e) => setPayAmount(e.target.value)}
                                    placeholder="Enter Amount"
                                />
                            </Stack>
                        </Grid>
                    ) : paymentType === "partial" ? (
                        <Grid container sx={{ p: 2 }} spacing={gridSpacing}>
                            <Grid item xs={6} md={6}>
                                <Stack>
                                    <InputLabel required>Pay Amount</InputLabel>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        id="amount"
                                        // name="name"
                                        error={isAmountError}
                                        onInput={(e) => {
                                            e.target.value = Math.max(0, parseInt(e.target.value)).slice(0, 5)
                                        }}

                                        // value={name}
                                        onChange={(e) => setPayAmount(e.target.value)}
                                        placeholder="Enter Amount"
                                    />
                                </Stack>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <Stack>
                                    <InputLabel required>Due Amount</InputLabel>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        defaultValue={0}
                                        error={isAmountError}
                                        // value={number}
                                        onInput={(e) => {
                                            e.target.value = Math.max(0, parseInt(e.target.value)).slice(0, 5)
                                        }}
                                        onChange={(e) => { setDue(e.target.value); }}
                                        placeholder="Enter Phone"
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                    ) : <>Select Payment Method First</>
                    }
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

export default PaymentPay;
