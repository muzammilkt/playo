import React, { useState , useEffect , useContext} from 'react';
import Page from "../../utils/Page";
import DtCard from '../../utils/District/DtCard';
import DtTypeConfig from '../../utils/District/DtTypeConfig';
import {
    Stack,
    Container,
    Typography,
    Grid,
} from "@mui/material";
//service 
import turfService from '../../../services/turfService';
//loader
import { loadingContext } from '../../../context/loadingContext';
import Loader from '../../utils/Loader';

export default function DistrictList() {

    const { loaderToggler } = useContext(loadingContext);

    const [districts , setDistrict] = useState();
    //get all districts
    useEffect(() => {
        const getDistricts = async () => {
          try {
            loaderToggler(true);
            // get districts
            const districts = await turfService.getDistricts();
            setDistrict(districts);
            loaderToggler(false);
          } catch (err) {
            console.error(err?.response?.data?.message);
            loaderToggler(false);
          }
        };
        getDistricts();
      }, []);
    return (
        <Page title="District List">
            <Container>
                <Loader/>
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
                        {districts && districts.map(district => (
                            <Grid item xs={12} sm={6} md={3}>
                                {DtTypeConfig.map((type) => (
                                    <DtCard
                                        data={district}
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
