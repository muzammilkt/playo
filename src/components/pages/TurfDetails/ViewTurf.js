import React from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Page from "../../utils/Page";
import {
  Stack,
  Container,
  Typography,
  Grid,
  Button,
  Card,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
//service
import turfService from "../../../services/turfService";
//loader
import { loadingContext } from "../../../context/loadingContext";
import Loader from "../../utils/Loader";

//taking userId from localstorage
const userId = localStorage.getItem("userId");
// console.log(userId);

export default function ViewTurf() {
  // const { id } = useParams();
  const { loaderToggler } = useContext(loadingContext);
  const [Turfs, setTurfs] = useState();

  //to get turf details
  useEffect(() => {
    const getTurfDetails = async () => {
      try {
        loaderToggler(true);
        // get turflist for owner
        const turfDetails = await turfService.getTurfDetails(userId);
        console.log(turfDetails);
        setTurfs(turfDetails);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getTurfDetails();
  }, []);

  return (
    <div>
      <Page title="View Turf Details">
        <Container>
          <Loader />
          <Stack
            direction="row"
            alignItems="left"
            justifyContent="space-between"
            mb={2}
          >
            <Typography variant="h5" gutterBottom>
              View Turf
            </Typography>

            <Grid>
              <Button
                variant="contained"
                component={RouterLink}
                to="/app/spots/addDetails"
                startIcon={<AddIcon />}
              >
                Add New Turf
              </Button>
            </Grid>
          </Stack>
          <Grid>
            {Turfs &&
              Turfs.map((turf) => (
                <Link to={`../../time/listforowner/${turf._id}`}>
                  <Card sx={{ maxWidth: 300 }}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="200"
                          image="https://5.imimg.com/data5/RC/SQ/MY-37114643/football-turf-grass-500x500.jpg"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h4" component="div">
                            {turf.turfname}
                          </Typography>
                          <Typography variant="h5" color="text.secondary">
                            By:{turf.ownername}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {turf.ownernmbr}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {turf.post},{turf.pinnumber}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Type:{turf.type}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Size:{turf.size}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Details:{turf.discription}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link to={`/app/spots/edit/${turf._id}`}>
                          <Button size="small" color="primary">
                            edit
                          </Button>
                        </Link>
                      </CardActions>
                    </Grid>
                  </Card>
                </Link>
              ))}
          </Grid>
        </Container>
      </Page>
    </div>
  );
}
