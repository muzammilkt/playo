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
  },
];

export default function BookedUserDetails() {
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
        console.log(userDetails);
        setBookedDetails(userDetails);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getUserData();
  }, []);

  return (
    <Page title="Booked Users Data">
      <Container>
        <Loader />
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          mb={2}
        ></Stack>

        <Grid>
{bookedDetails && <DataTable TABLE_HEAD={TABLE_HEAD} TABLE_DATA={bookedDetails} />
}        </Grid>
      </Container>
    </Page>
  );
}
