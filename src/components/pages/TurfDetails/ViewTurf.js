import React from 'react'
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import Page from "../../utils/Page";
import {
    Stack,
    Container,
    Typography,
    Grid,
    Button,
    Card,
    Box
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ViewTurf() {
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

                        <Grid>
                            <Button
                                variant="contained"
                                component={RouterLink}
                                to="/app/spots/addDetails"
                                startIcon={<AddIcon />}
                            >

                                Add Details
                            </Button>
                        </Grid>
                    </Stack>
                </Container>
            </Page>
        </div>
    )
};
