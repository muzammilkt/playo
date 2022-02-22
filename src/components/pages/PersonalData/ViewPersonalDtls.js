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
      </Container>
    </Page>
  )
};
