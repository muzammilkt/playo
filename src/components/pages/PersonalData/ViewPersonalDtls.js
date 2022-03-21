import {useEffect , useState} from "react";
import Page from "../../utils/Page";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack, Container, Typography, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
//service
import turfService from "../../../services/turfService";

//taking userId from localstorage
const userId = localStorage.getItem("userId");

export default function ViewPersonalDtls() {
  const[PersonalData , setPersonalData]  =useState();
  //to get personal details
useEffect(() => {
  const getPersonalDetails = async () => {
    try {
      // loaderToggler(true);
      // get personal data
      const PersonalDetails = await turfService.getPersonalDetails(userId);
      console.log(PersonalDetails);
      setPersonalData(PersonalDetails);
      // loaderToggler(false);
    } catch (err) {
      console.error(err?.response?.data?.message);
      // loaderToggler(false);
    }
  };
  getPersonalDetails();
}, []);

  return (
    <Page title="View Personal Data">
      <Container>
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            View Personal data
          </Typography>
          <Link to="/app/personaldata/addprofile">
            <Grid>
              <Button variant="contained">Add Data</Button>
            </Grid>
          </Link>
        </Stack>
        <Grid>
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  muzammil
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  9567167713
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  muzammil@gmail.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  anthekkad(h),kumminipparamb(po), malappuram(dt),kerala st
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`../addprofile/`}>
              <Button size="small" color="primary">
                edit
              </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </Page>
  );
}
