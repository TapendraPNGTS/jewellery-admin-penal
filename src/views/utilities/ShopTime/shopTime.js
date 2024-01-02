import React, { useCallback, useState, useEffect } from "react";
// material-ui
import { Card, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import ShopTime from "apis/shoptime.api";
import { AllShopTime } from "redux/redux-slice/shopTime.slice";

// ===============================|| COLOR BOX ||=============================== //
// ===============================|| UI COLOR ||=============================== //
export default function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shopTime = new ShopTime();

  const rows = useSelector((state) => state.shopTime.allShopTime);

const [search, setSearch] = React.useState("");
const [page, setPage] = React.useState(1);
const [weeks, setWeeks] = React.useState('');
const [rowsPerPage, setRowsPerPage] = useState(10);
// const [rows, setRows] = useState('');
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage( +event.target.value);
    setPage(1);
  };

  const getAllUser = useCallback(async () => {
    try {
      const users = await shopTime.getAllShop();
      if (!users || !users.data.data) {
        return toast.error("no latest data available");
      } else {
        dispatch(AllShopTime(users.data.data));
        setWeeks(users.data.data[0].week);
        return toast.success("Latest data available");
        return;
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  });

   const handleDelete = async (timeId) => {
    try {
      const deleteUserResponse = await shopTime.getDeleteShop({ timeId });
      if (deleteUserResponse && deleteUserResponse?.data?.code === 200) {
        getAllUser();
        return toast.success("Deleted Successfully");
      } else {
        return toast.error(deleteUserResponse.data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      throw error;
    }
  };

  useEffect(() => {
    getAllUser();
  }, []); 

  function formatTime(time) {
    return new Date(time).toLocaleString("en-us", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
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
                      <TableCell>Week Day</TableCell>
                      <TableCell>Week End</TableCell>
                      {/* <TableCell>Weight</TableCell> */}
                      <TableCell>WeekEnd Start</TableCell>
                      <TableCell>WeekEnd End</TableCell>
                      <TableCell>Open Time</TableCell>
                      <TableCell>Close Time</TableCell>
                      <TableCell>Active</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .filter((row) =>
                        search.toLowerCase() === ""
                          ? row
                          : row.title.toLowerCase().includes(search)
                      )
                      // .slice(
                      //   page * rowsPerPage,
                      //   page * rowsPerPage + rowsPerPage
                      // )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            
                            <TableCell align="start">{index + 1}</TableCell>
                            <TableCell align="start">{row?.week.start ? row.week.start : "-"}</TableCell>
                            <TableCell align="start">{row?.week.end ? row.week.end : '-'}</TableCell>
                            <TableCell align="start">{row?.weekEnd?.start ? row.weekEnd.start : "-"}</TableCell>
                            <TableCell align="start">{row?.weekEnd?.end ? row.weekEnd?.end : "-"}</TableCell>
                            <TableCell align="start">{row?.week?.startTime ? formatTime(row.week.startTime) : "-"}</TableCell>
                            <TableCell align="start">{row?.week?.endTime ? formatTime(row.week.endTime) : "-"}</TableCell>
                            <TableCell align="start">{row?.isActive ? 'True' : "False"}</TableCell>
                            <TableCell>
                              <Link to={`/update-shoptime/${row.timeId}`}>
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                >
                                  <EditIcon sx={{ fontSize: "1.1rem" }} />
                                </IconButton>
                              </Link>
                              {/* <Link to={`/view-shoptime/${row.timeId}`}>
                                <IconButton
                                  color="primary"
                                  aria-label="view"
                                  size="large"
                                >
                                  <DisplaySettingsIcon sx={{ fontSize: "1.1rem" }} />
                                </IconButton>
                              </Link> */}

                              <IconButton
                                onClick={(e) => {
                                  handleDelete(row.timeId); 
                                }}
                                color="primary"
                                aria-label="view"
                                size="large"
                              >
                                <DeleteIcon sx={{ fontSize: "1.1rem" }} />
                              </IconButton>
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
