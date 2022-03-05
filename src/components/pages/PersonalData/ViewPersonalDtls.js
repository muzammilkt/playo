import React from 'react'
import Page from "../../utils/Page";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import {
  Stack,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea, CardActions } from '@mui/material';

export default function ViewPersonalDtls() {
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
                 anthekkad(h),kumminipparamb(po),
                 malappuram(dt),kerala st
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </Page>
  )
};
