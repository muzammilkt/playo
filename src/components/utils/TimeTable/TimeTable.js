import { useEffect, useState , useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import {
  Stack,
  Container,
  Typography,
  Grid,
  Button,
  Card,
} from "@mui/material";
//loader
import { loadingContext } from "../../../context/loadingContext";
import Loader from "../../utils/Loader";
// import { getTimeSlots } from "../../../services/timeSlotService";
import TimeSlotService from "../../../services/timeSlotService";

export default function TimeTable() {
  const { loaderToggler } = useContext(loadingContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [timeSlots, setTimeSlots] = useState();

  useEffect(() => {
    try {
      loaderToggler(true);
      async function getTimeSlots() {
        const res = await TimeSlotService.getTimeSlots(id);
        console.log(res);
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

  //handle button for booking
  const handleBook = async (event , id) => {
    try {
      loaderToggler(true);
      const slotId = event.target.id;
      console.log(slotId);
      const userId = localStorage.getItem("userId");
      const turfId = id;
      const data={
        userId,
        turfId,
        // slotId
      };
      // const booking = await TimeSlotService.bookSlot(data);
      // navigate("/app/time/list");
      loaderToggler(false);
    } catch (error) {
      console.error(error.response);
      loaderToggler(false);
    }
  };

  return (
    <TableContainer component={Paper}>
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
                    onClick={(e) => handleBook(e,row._id)}
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
