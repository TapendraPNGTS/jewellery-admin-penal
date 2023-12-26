import React, { useEffect, useCallback, useState } from "react";
// material-ui
import {
  Grid,
  Card,
  TableRow,
  TablePagination,
  Paper,
  TextField,
  TableCell,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import OrderApi from "apis/order.api";

function App() {
  const params = useParams();
  const orderApi = new OrderApi();

  const [rows, setRows] = React.useState([]);
  const [fName, setFName] = React.useState('');
  const [lName, setLName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getAllUser = useCallback(async () => {
    try {
      const users = await orderApi.getOrderById({
        cartId: params.id,
      });
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        setRows(users.data.data.item);
        setFName(users.data.data.userId.firstName);
        setLName(users.data.data.userId.lastName);
        setEmail(users.data.data.userId.email);
        return toast.success("Latest data available");
      }
    } catch (error) {
      // console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

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
      <MainCard title="Order Details">
        <Grid container spacing={gridSpacing}>
          <Grid
            item
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 8 }}
          >
            <Grid item>
              <Typography variant="h4">
                Name : &nbsp;&nbsp;{fName} &nbsp;{lName+' ,'}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">
              Email : &nbsp;&nbsp; {email+' ,'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
      <MainCard
        title={
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={gridSpacing}
          >
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                id="outlined-search"
                label="Search field"
                type="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Grid>
          </Grid>
        }
        content={false}
      >
        {rows ? (
          <Card>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: 540 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ pl: 3 }}>Sr No.</TableCell>
                      <TableCell>Item Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Total Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search.toLowerCase() === ""
                          ? row
                          : row?.name?.toLowerCase().includes(search)
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
                            key={index}
                          >
                            <TableCell align="start">{index + 1}</TableCell>
                            <TableCell align="start">
                              {row?.name ? row.name : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row?.price ? row.price.toFixed(2) : "-"}
                            </TableCell>
                            <TableCell align="start">
                              {row?.totalPrice
                                ? row.totalPrice.toFixed(2)
                                : "-"}
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
          <h6>Loading...</h6>
        )}
      </MainCard>
    </>
  );
}

export default App;
