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


export default function TurfViewById() {
  const { id } = useParams();
  const { loaderToggler } = useContext(loadingContext);
  const [Turfs, setTurfs] = useState();

  //to get turf details
  useEffect(() => {
    const getTurfDetails = async () => {
      try {
        loaderToggler(true);
        // get districts
        const turfDetails = await turfService.getTurfDetailsById(id);
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
          <Stack
            direction="row"
            alignItems="left"
            justifyContent="space-between"
            mb={2}
          >
            <Typography variant="h5" gutterBottom>
              View Turf
            </Typography>
          </Stack>
          <Grid>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://5.imimg.com/data5/RC/SQ/MY-37114643/football-turf-grass-500x500.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {Turfs && Turfs.turfname}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    By:{Turfs && Turfs.ownername}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {Turfs && Turfs.ownernmbr}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {Turfs && Turfs.post},{Turfs && Turfs.pinnumber}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type:{Turfs && Turfs.type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Size:{Turfs && Turfs.size}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Details:{Turfs && Turfs.discription}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              </CardActions>
            </Card>
              {/* ))} */}
          </Grid>
        </Container>
      </Page>
    </div>
  );
}
