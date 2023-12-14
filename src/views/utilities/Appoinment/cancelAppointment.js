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
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import MainCard from "ui-component/cards/MainCard";
import TextField from "@mui/material/TextField";
import {
  Chip,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function CancelAppointment() {
  const navigate = useNavigate()
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
   
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
    fetch(`${process.env.REACT_APP_API_URL}getCancelAppointment`, requestOptions)
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
                            {!row.Status == "Cancel" ? (
                              <Chip
                              label="Cancel"
                              chipcolor="red"
                              size="small"
                            />
                             ) : (
                              <Chip
                              label="Cancel"
                              color="error"
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