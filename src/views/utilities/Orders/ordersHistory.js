import React, { useCallback, useState, useEffect } from "react";
// material-ui
import { Card, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
// project imports
import MainCard from "ui-component/cards/MainCard";
import { gridSpacing } from "store/constant";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";

import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import OrderApi from "apis/order.api";
import { AllOrders } from "redux/redux-slice/orders.slice";

// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //
export default function Users() {
  const dispatch = useDispatch();
  const orders = new OrderApi();

  const rows = useSelector((state) => state.orders.allOrders);
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage( +event.target.value);
    setPage(1);
  };

  const getAllUser = useCallback(async () => {
    try {
      const users = await orders.getAllOrder({page: page, recordsLimit: rowsPerPage});
      if (!users || !users.data.data) {
      } else {
        dispatch(AllOrders(users.data.data));
        return;
      }
    } catch (error) {
      console.error(error);
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
                      <TableCell>Date</TableCell>
                      <TableCell>User Name</TableCell>
                      <TableCell>Email </TableCell>
                      <TableCell>Order Id </TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search.toLowerCase() === ""
                          ? row
                          : row?.userId?.firstName.toLowerCase().includes(search)
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
                            <TableCell align="start">{row?.userId?.createdAt ? formatDate(row.userId.createdAt) : '-'}</TableCell>
                            <TableCell align="start">{row?.userId?.firstName ? row.userId.firstName: ''} {row?.userId?.lastName ? row.userId.lastName : ""}</TableCell>
                            <TableCell align="start">{row?.userId?.email ? row.userId.email : "-"}</TableCell>
                            <TableCell align="start">{row?.orderNumber ? row.orderNumber : "-"}</TableCell>
                            <TableCell align="start">{row?.status ? row.status : "-"}</TableCell>
                            <TableCell>
                              <Link to={`/view-orders/${row.cartId}`}>
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                >
                                  <DisplaySettingsIcon sx={{ fontSize: "1.1rem" }} />
                                </IconButton>
                              </Link>
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
