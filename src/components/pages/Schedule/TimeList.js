import {useState , useContext} from 'react'
import Page from "../../utils/Page";
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";
import TimeTable from "../../utils/TimeTable/TimeTable";
//loader
import { loadingContext } from '../../../context/loadingContext';
import Loader from '../../utils/Loader';

export default function TimeList() {
    const { loaderToggler } = useContext(loadingContext);
    return (
        <Page title="Time List">
            <Container>
                <Loader/>
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
                        <h4>Book Your Slot</h4>
                    </Grid>
                </Stack>
                <TimeTable />
            </Container>
        </Page>
    )
};
