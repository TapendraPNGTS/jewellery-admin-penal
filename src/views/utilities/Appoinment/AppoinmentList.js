import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import dayjs from 'dayjs';
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {toast} from 'react-toastify';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
import SearchIcon from '@mui/icons-material/Search';

import {
  Chip,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import { Stack } from "@mui/material";

export default function DataTable() {
  const navigate = useNavigate()
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState(new Date());

  var myHeaders = new Headers();
  myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
  myHeaders.append("token", localStorage.getItem("token"));
  myHeaders.append("Content-Type", "application/json");

  const handleDate = (date) => {
    setDate(date)
  }
  const handleDateChange = () => {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      date: date
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getCurrentAppointment`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
        // if (result.code == 200) {
        //   // navigate("/wallet-transfer");
        //   toast.success("Updated List By Date", {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //   });
        // } else if (result.code == 201) {
        //   toast.error(result.message, {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //   });
        // }
      })
      .catch((error) => console.log("error", error));
  };

  function getalldata() {
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getAllAppointment`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRows(result.data);
      })
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    getalldata()
  }, []);

  useEffect(() => {
  }, [rows]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function formatDate(date) {
    return new Date(date).toLocaleString("en-us", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={4} md={4} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
              <DatePicker
                onChange={handleDate}
                defaultValue={dayjs(new Date())}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={1} md={1} >
          <Button size="large"
           sx={{p:1.6, pr: 0.5}}
            variant="outlined"
            onClick={handleDateChange}
            startIcon={<SearchIcon fontSize="inherit"/>}
          >
          </Button>
        </Grid>
      </Grid>
      <MainCard
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item>
              <Typography variant="h3">List</Typography>
            </Grid>

            <Grid item>
              <Button
                variant="outlined"
                onClick={(e) => {
                  navigate('/add-appointment')
                }}
                startIcon={<AddIcon />}
              >
                Add Appointment
              </Button>
              &nbsp;
              &nbsp;
            </Grid>
          </Grid>
        }
        content={false}
      >
        {rows ? (
          <Card >
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={gridSpacing}
            >
            </Grid>

            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table" id="my-table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>S. No.</TableCell>
                      <TableCell >Name</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Due Amount</TableCell>
                      <TableCell align="center" sx={{ pr: 3 }}>
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search === ""
                          ? row
                          : row.Name.toLowerCase().includes(
                            search.toLowerCase()
                          )
                      )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            <TableCell sx={{ pl: 3 }} align="start">{index + 1}</TableCell>
                            <TableCell >{row.Name}</TableCell>
                            <TableCell align="start">
                              {row.Phone}
                            </TableCell>
                            <TableCell align="start">{row.Gender}</TableCell>
                            <TableCell align="start">{row.Age}</TableCell>
                            <TableCell align="start">{formatDate(row.Date)}</TableCell>
                            <TableCell align="start">{row.Time}</TableCell>
                            <TableCell align="start">{row.Description.length > 40 ? row.Description.substring(0, 30) + "..." : row.Description}</TableCell>
                            <TableCell align="start">{row.Orignal_Amount}</TableCell>
                            <TableCell align="start">{row.Due}</TableCell>
                            <TableCell align="start">
                              {row.Status === "Cancel" ? (
                                <Chip
                                  label="Cancel"
                                  color="error" // Orange color for pending status
                                  size="small"
                                />
                              ) : row.Status === "Pending" ? (
                                <Chip
                                  label="Pending"
                                  color="warning" // Red color for inactive status
                                  size="small"
                                />
                              ) : (
                                <Chip
                                  label="Completed"
                                  color="success" // Green color for active status
                                  size="small"
                                />
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 20, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Card>
        ) : (
          <>
            <br></br>
            <h5 className="text-center">Please Wait Data Loading...</h5>
          </>
        )}
      </MainCard>
    </>
  );
}
