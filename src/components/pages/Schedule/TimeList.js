import React from 'react'
import Page from "../../utils/Page";
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";


export default function TimeList() {
    return (
        <Page title="Time List">
            <Container>
                <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="space-between"
                    mb={2}
                >
                    <Typography variant="h5" gutterBottom>
                        Time List
                    </Typography>
                    <Grid>
                        <h1>welcome</h1>
                    </Grid>
                </Stack>
            </Container>
        </Page>
    )
};
