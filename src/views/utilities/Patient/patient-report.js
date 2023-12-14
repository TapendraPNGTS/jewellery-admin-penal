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
import { Grid } from "@mui/material";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import MainCard from "ui-component/cards/MainCard";
import DataNotFound from "../../../assets/images/Data_not_found.svg";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material"
import { Button } from "bootstrap";

export default function PatientList() {
  const navigate = useNavigate();
  const params = useParams();
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = useState("");
  const [checkIs, setCheckIs] = useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState([]);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [number, setNumber] = React.useState("");

  function getalldata() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      adminId: localStorage.getItem("userId"),
      patientId: params.id,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `${process.env.REACT_APP_API_URL}getReportByPatientId`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.data != null) {
          setCheckIs(false)
          setRows(result.data.ChekcUp);
          setName(result.data.PatientID.Name);
          setNumber(result.data.PatientID.Phone);
          setDescription(result.data.PatientID.Description);

        } else {
          setCheckIs(true)
        }
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    getalldata();
  }, []);

  useEffect(() => { }, [rows]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const DeleteCategory = (str) => () => {
    swal({
      title: "Are you sure want to delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        toast.success("Deleted Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        var myHeaders = new Headers();
        myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
        myHeaders.append("token", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          adminId: localStorage.getItem("userId"),
          categoryId: str,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${process.env.REACT_APP_API_URL}deleteCategory`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            getalldata();
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
      <MainCard
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item container>
            <Grid item sm={12} md={6}>
            <b>Name :- </b>{name}
            </Grid>
            <Grid item sm={12} md={6}>
            <b>Number :- </b>{number}
            </Grid>
            <Grid item md={11}>
            <b>Description :- </b>{description}
           </Grid>
           </Grid>
          </Grid>
        }
        content={false}
      >
        {checkIs == true ? (
          <>
            {" "}
            <img
              src={DataNotFound}
              alt="Data Not Found"
              style={{ width: "100%" }}
            />
          </>
        ) : (
          <>
            {rows ? (
              <Card>
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
                          <TableCell>Date</TableCell>
                          <TableCell>Front Img</TableCell>
                          <TableCell>Back Img</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows
                          .filter((row) =>
                            search === ""
                              ? row
                              : row.Title.toLowerCase().includes(
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
                              >
                                <TableCell sx={{ pl: 3 }} align="start">
                                  {index + 1}
                                </TableCell>
                                <TableCell align="start">{formatDate(row.NextDate)}</TableCell>
                                <TableCell align="start">
                                  <a href={`${process.env.REACT_APP_IMAGE_URL}${row.Frontend}`} target="blank">
                                  <Avatar src={`${process.env.REACT_APP_IMAGE_URL}${row.Frontend}`}/>
                                  </a>
                                </TableCell>
                                <TableCell align="start">
                                <a href={`${process.env.REACT_APP_IMAGE_URL}${row.Backend}`} target="_blank">
                                  <Avatar src={`${process.env.REACT_APP_IMAGE_URL}${row.Backend}`}/>
                                  </a>
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
          </>
        )}
      </MainCard>
    </>
  );
}
