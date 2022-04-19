import { useEffect, useState } from "react";
import { useContext } from "react";
import Page from "../../utils/Page";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack, Container, Typography, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";

import DataTable from "../../utils/DataTable";
//service
import turfService from "../../../services/turfService";
//loader
import { loadingContext } from "../../../context/loadingContext";
import Loader from "../../utils/Loader";
import { id } from "date-fns/locale";
import { Label } from "@mui/icons-material";

//taking userId from localstorage
const TABLE_HEAD = [
  {
    id: "name",
    label: "Name",
    alignRight: false,
    type: "stack",
  },
  {
    id: "phoneNo",
    label: "Phone Number",
    alignRight: false,
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    alignRight: false,
    type: "text",
  },
  {
    id: "slot",
    label: "Slot",
    alignRight: false,
    type: "text",
  },
  {
    id: "delete",
    label: "Delete Booking",
    alignRight: false,
    type: "button",
  },
];

const bookedUserList = [
  {
    name: "muzammmil",
    phoneNo: "9567167713",
    email: "muzammil@gmail.com",
    slot: "6.00 am to 7.00 am",
  },
];

export default function BookedUserDetails() {
  const { loaderToggler } = useContext(loadingContext);

  //   const[userData , setUserData]  =useState();
  //to get booked users details
  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       loaderToggler(true);
  //       // get user data
  //       const userDetails = await turfService.getPersonalDetails(userId);
  //       console.log(PersonalDetails);
  //       setPersonalData(PersonalDetails);
  //       loaderToggler(false);
  //     } catch (err) {
  //       console.error(err?.response?.data?.message);
  //       loaderToggler(false);
  //     }
  //   };
  //   getUserData();
  // }, []);

  return (
    <Page title="Booked Users Data">
      <Container>
        <Loader />
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          mb={2}
        >
        </Stack>
        <Grid>
          <DataTable TABLE_HEAD={TABLE_HEAD} TABLE_DATA={bookedUserList} />
        </Grid>
      </Container>
    </Page>
  );
}
