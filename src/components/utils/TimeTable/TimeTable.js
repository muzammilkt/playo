import React, { useEffect, useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
//loader
import { loadingContext } from "../../../context/loadingContext";
import Loader from "../../utils/Loader";
// import { getTimeSlots } from "../../../services/timeSlotService";
import TimeSlotService from "../../../services/timeSlotService";

import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TimeTable() {
  const { loaderToggler } = useContext(loadingContext);
  const [confirmed, setConfirmed] = useState();

  const navigate = useNavigate();
  const { id } = useParams();
  const [timeSlots, setTimeSlots] = useState();
  const confirmedHandler = () => {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000);
  };
  //get unbooked timeSlots
  const getBooking = () => {
    try {
      loaderToggler(true);
      async function getTimeSlots() {
        const res = await TimeSlotService.getTimeSlots(id);
        setTimeSlots(res);
      }
      getTimeSlots();
      loaderToggler(false);
      // navigate(`listforbooking/${id}`);
    } catch (err) {
      console.log(err.message);
      loaderToggler(false);
    }
  };

  //handle button for booking
  useEffect(() => {
    try {
      loaderToggler(true);
      async function getTimeSlots() {
        const res = await TimeSlotService.getTimeSlots(id);
        setTimeSlots(res);
      }
      getTimeSlots();
      loaderToggler(false);
      // navigate(`listforbooking/${id}`);
    } catch (err) {
      console.log(err.message);
      loaderToggler(false);
    }
  }, []);

  const handleBook = (slotId) => async (event) => {
    try {
      loaderToggler(true);
      const userId = localStorage.getItem("userId");
      const turfId = id;
      const data = {
        userId,
        turfId,
        slotId,
      };
      const booking = await TimeSlotService.bookSlot(data);
      getBooking();
      confirmedHandler();
      navigate(`/app/time/listforbooking/${id}`);
      loaderToggler(false);
    } catch (error) {
      console.error(error.response);
      loaderToggler(false);
    }
  };
  return (
    <TableContainer component={Paper}>
      <Loader />
      {confirmed && (
        <Alert severity="success">
          You Have Successfully Booked Your Slot!
        </Alert>
      )}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Time</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {timeSlots &&
            timeSlots.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.slot}</TableCell>
                <TableCell align="right">
                  <Button
                    color="success"
                    disabled={row.booked ? "true" : ""}
                    variant="contained"
                    onClick={handleBook(row._id)}
                  >
                    {row.booked ? "Booked" : "Book Now"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
