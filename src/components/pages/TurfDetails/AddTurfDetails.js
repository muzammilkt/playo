import React from 'react'
import Page from "../../utils/Page";
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";


export default function AddTurfDetails() {
    return (
        <Page title="Add Turf Details">
            <Container>
                <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="space-between"
                    mb={2}
                >
                    <Typography variant="h5" gutterBottom>
                        Add Turf Detais
                    </Typography>
                    <Grid>
                        <h1>welcome</h1>
                    </Grid>
                </Stack>
            </Container>
        </Page>
    )
};
