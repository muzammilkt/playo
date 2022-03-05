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
} from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
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
        </div>
    )
};
