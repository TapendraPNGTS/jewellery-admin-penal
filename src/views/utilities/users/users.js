
import React from "react";

// material-ui
import { Card, Grid, Typography, Chip, Button } from '@mui/material';
import Paper from "@mui/material/Paper";
// project imports
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //
import ExcelJS from 'exceljs';

export default function Users() {
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getalldata() {
    var myHeaders = new Headers();
    myHeaders.append("authkey", process.env.REACT_APP_AUTH_KEY);
    myHeaders.append("token", localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "adminId": localStorage.getItem('userId')
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_API_URL}AllUser`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        if (result.code === 200) {
          setRows(result.data)
        }
      })
      .catch((error) => {

      });
  }
  useEffect(() => {
    getalldata()
  }, []);

  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Get the table data
    const table = document.getElementById('my-table');
    const rows = table.getElementsByTagName('tr');

    worksheet.addRow([
      'S.No',
      'User ID',
      'Name',
      'Email',
      'Phone',
      'Status'
    ]
    );

    // Iterate over the rows and cells of the table
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      const rowData = [];

      for (let j = 0; j < cells.length; j++) {
        rowData.push(cells[j].innerText);

      }
      worksheet.addRow(rowData);
    }

    // Create a buffer and save the workbook
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'users.xlsx';
      a.click();
    });
  };
  return (
    <>
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <MainCard
        title={
          <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
            <Grid item>
              <Typography variant="h3">Users</Typography>
            </Grid>
            <Grid item>

              <Button
                variant="outlined"
                onClick={exportToExcel}
              >
                Export
              </Button>
            </Grid>

          </Grid>
        }
        content={false}
      >
        {rows ? (

          <Card>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table" id="my-table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>S No.</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Qualificaion</TableCell>
                      <TableCell>Is Active</TableCell>
                      {/* <TableCell align="center" sx={{ pr: 3 }}>Action</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.
                      filter((row) =>
                        search === ""
                          ? row
                          : row.Phone.toLowerCase().includes(
                            search.toLowerCase()
                          )
                      )
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            <TableCell align="start">{index + 1}</TableCell>
                            <TableCell align="start" hidden>{row.UserID}</TableCell>
                            <TableCell align="start">{(row.Name) ? row.Name : '-'}</TableCell>
                            <TableCell align="start">{(row.Email) ? row.Email : '-'}</TableCell>
                            <TableCell align="start">{(row.Phone) ? row.Phone : '-'}</TableCell>
                            <TableCell align="start">{(row.Qualification) ? row.Qualification : '-'}</TableCell>
                            <TableCell align="start">
                              {
                                (row.IsActive === true)
                                  ? <Chip label="Active" color="success" size="small" />
                                  :
                                  <Chip label="In-Active" color="error" size="small" />
                              }
                            </TableCell>
                            {/* <TableCell align="center" sx={{ pr: 3 }}>
                            <Stack
                              direction="row"
                              justifyContent="center"
                              alignItems="center"
                            >
                                  <Tooltip placement="top" title="view">
                                  <Link to={`/view-user/${row.PaymentID}`} 
                                //   onClick={()=>handleHistory(row.PaymentID)}
                                  >
                                    <IconButton color="primary" aria-label="view" size="large" >
                                    <EditIcon sx={{ fontSize: "1.1rem" }} />
                                    </IconButton>
                                  </Link>
                                </Tooltip>
                            </Stack>
                          </TableCell> */}
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
          <h6>Loading...</h6>
        )}
      </MainCard>
    </>
  )
}

