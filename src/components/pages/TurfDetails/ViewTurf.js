import React from 'react'
import { Link as RouterLink } from "react-router-dom";
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
                                    image="https://5.imimg.com/data5/RC/SQ/MY-37114643/football-turf-grass-500x500.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        marena
                                    </Typography>
                                    <Typography variant="h5" color="text.secondary">
                                        By:muzammil
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        9567167713
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        marena@gmail.com
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        marenaturf,kumminipparamb(po),
                                        malappuram(dt),kerala st
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        673638
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to="/app/spots/addDetails">
                                    <Button size="small" color="primary">
                                        edit
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Container>
            </Page>
        </div>
    )
};
