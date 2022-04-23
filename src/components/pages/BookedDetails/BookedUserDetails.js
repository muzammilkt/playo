import { useEffect, useState } from "react";
import { useContext } from "react";
import Page from "../../utils/Page";
import { useParams } from "react-router-dom";
import { Stack, Container, Grid } from "@mui/material";

import DataTable from "../../utils/DataTable";
//service
import turfService from "../../../services/turfService";
//loader
import { loadingContext } from "../../../context/loadingContext";
import Loader from "../../utils/Loader";

import TimeSlotService from "../../../services/timeSlotService";
import useConfirm from "../../utils/DataTable/useConfirm";

export default function BookedUserDetails() {
  const { ConfirmSnack, confirmToggler } = useConfirm(
    "Slot successfuly deleted"
  );
  const { loaderToggler } = useContext(loadingContext);
  const { id } = useParams();
  const [bookedDetails, setBookedDetails] = useState();

  // to get booked users details
  useEffect(() => {
    const getUserData = async () => {
      try {
        loaderToggler(true);
        // get user data
        const userDetails = await turfService.getBookedUsersDetails(id);
        setBookedDetails(userDetails);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      loaderToggler(true);
      // get user data
      const userDetails = await turfService.getBookedUsersDetails(id);
      setBookedDetails(userDetails);
      loaderToggler(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
      loaderToggler(false);
    }
  };
  //delete booking
  const HandleDelete = (id) => async (event) => {
    try {
      await TimeSlotService.DeleteBooking(id);
      getUserData();
      confirmToggler();
    } catch (error) {
      console.log(error);
    }
  };
  //taking userId from localstorage
  const TABLE_HEAD = [
    {
      id: "userId.name",
      label: "Name",
      alignRight: false,
      type: "stack",
    },
    {
      id: "userId.phonenmbr",
      label: "Phone Number",
      alignRight: false,
      type: "text",
    },
    {
      id: "userId.email",
      label: "Email",
      alignRight: false,
      type: "text",
    },
    {
      id: "slotId.slot",
      label: "Slot",
      alignRight: false,
      type: "text",
    },
    {
      id: "_id",
      label: "Delete Booking",
      alignRight: false,
      type: "button",
      deleteHandler: HandleDelete,
    },
  ];

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
        <ConfirmSnack />
        <Grid>
          {bookedDetails && (
            <DataTable TABLE_HEAD={TABLE_HEAD} TABLE_DATA={bookedDetails} />
          )}{" "}
        </Grid>
      </Container>
    </Page>
  );
}
