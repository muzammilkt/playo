import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from "react-router-dom";
import {
    Stack,
    Container,
    Typography,
    Grid,
    Button,
    Card,
} from "@mui/material";


const rows = [
    {
        time: "1.00 pm to 2.00 pm",
        booked: true
    },
    {
        time: "2.00 pm to 3.00 pm",
        booked: false
    },
    {
        time: "1.00 pm to 2.00 pm",
        booked: true
    },
    {
        time: "!.00 pm to 2.00 pm",
        booked: false
    }
];


export default function TimeTable() {
    const navigate = useNavigate();
    //handle button for booking
    const handleBook = async () => {
        try {
            // await departmentService.deleteDepartment(id);
            navigate("/app/time/list");
        } catch (error) {
            console.error(error.response)
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{row.time}</TableCell>
                            <TableCell align="right">

                                <Button color="success"
                                    disabled={row.booked ? "true" : ""} variant="contained" onClick={handleBook}>
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