import React from 'react';
import Page from "../../utils/Page";
import GroundCard from '../../utils/Ground/GroundCard';
import GrdTypeConfig from '../../utils/Ground/GrdTypeConfig';
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";
const spots = [{
    name: "marena",
    place: "kumminipparmb",
    phoneNo: "545345643",
    shortName : "ma"
},
{
    name: "killadi",
    place: "pallikkal",
    phoneNo: "6587563",
    shortName:"kd"
}];

export default function TurfList() {
    return (
        <Page title="Spot List">
            <Container>
                <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="space-between"
                    mb={2}
                >
                    <Grid container spacing={3} rowSpacing={1} direction="row">
                        {spots.map(spot => (
                            <Grid item xs={12} sm={6} md={3}>
                                {GrdTypeConfig.map((type) => (
                                    <GroundCard
                                        data={spot}
                                        type={type}
                                    // onClick={handleClick}
                                    />
                                ))}
                            </Grid>
                        ))}


                    </Grid>
                </Stack>
            </Container>
        </Page>
    )
}
