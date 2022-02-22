import React from 'react';
import Page from "../../utils/Page";
import DtCard from '../../utils/District/DtCard';
import DtTypeConfig from '../../utils/District/DtTypeConfig';
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";
const spots = [{
    name: "Alappuzha",
    shortName: "AL"
},
{
    name: "Ernakulam",
    shortName: "ER"

}, {
    name: "Idukki",
    shortName: "ID"

}, {
    name: "Kannur",
    shortName: "KN"

}, {
    name: "Kasaragod",
    shortName: "KS"

}, {
    name: "Kollam",
    shortName: "KL"

}, {
    name: "Kottayam",
    shortName: "KT"

}, {
    name: "Kozhikode",
    shortName: "KZ"

}, {
    name: "Malappuram",
    shortName: "MA"
}, {
    name: "Palakkad",
    shortName: "PL"

}, {
    name: "Pathanamthitta",
    shortName: "PT"

}, {
    name: "Thiruvananthapuram",
    shortName: "TV"

}, {
    name: "Thrissur",
    shortName: "TS"

}, {
    name: "Wayanad",
    shortName: "WA"

}];

export default function DistrictList() {
    return (
        <Page title="District List">
            <Container>
                <Typography variant="h5" gutterBottom>
                    District List
                </Typography>
                <Stack
                    direction="row"
                    alignItems="left"
                    justifyContent="space-between"
                    mb={2}
                >
                    <Grid container spacing={3} rowSpacing={1} direction="row">
                        {spots.map(spot => (
                            <Grid item xs={12} sm={6} md={3}>
                                {DtTypeConfig.map((type) => (
                                    <DtCard
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
