import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";
import swal from "sweetalert";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import { toast } from 'react-toastify';
import {
  Stack,
  Tooltip,
  Chip,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function PendingAppoinment() {
  const navigate = useNavigate()
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const orangeColor = "#FFA500";

  function getalldata() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(`${process.env.REACT_APP_API_URL}getPendingAppointment`, requestOptions)
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


  const DeleteAppoinment = (str) => () => {
    swal({
      title: "Are you sure want to Cancel ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        var myHeaders = new Headers();
        myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
        myHeaders.append("token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          adminId: localStorage.getItem("userId"),
          appointmentId: str,

        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${process.env.REACT_APP_API_URL}cancelAppointment`, requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            // console.log(result)
            if (result.code === 200) {
              toast.success((result.message), {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
              });
              getalldata();
            }
            else {
              toast.error(result.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
              }, getalldata());
            }
          })
          .catch((error) => console.log("error", error));
      } else {
      }
    });
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
      <Grid container>

        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
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
                      <TableCell align="center" sx={{ pr: 3 }}>
                        Actions
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
                            <TableCell align="start">{row.Description.length>40?row.Description.substring(0,30)+"...":row.Description}</TableCell>
                            <TableCell align="start">{row.Orignal_Amount}</TableCell>
                            <TableCell align="start">{row.Due}</TableCell>
                            <TableCell align="start">
                              {row.Status == "Pending" ? (
                                <Chip
                                  label="Pending"
                                  color="warning" // Orange color for pending status
                                  size="small"
                                />
                              ) : (
                                <Chip
                                label="cancel"
                                color="error" // Orange color for pending status
                                size="small"
                              />
                              )}                              
                            </TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                              >
                            <Tooltip
                                  placement="top"
                                  title="Cancel"
                                  onClick={DeleteAppoinment(`${row.AppoinmentID}`)}
                                >
                                  <Button  variant="contained" color="error">
                                    Cancel
                                  </Button>
                                </Tooltip>
                              </Stack>
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
      </MainCard >
    </>
  );
}

