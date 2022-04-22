import React , {useEffect , useState , useContext} from "react";
import Page from "../../utils/Page";
import GroundCard from "../../utils/Ground/GroundCard";
import GrdTypeConfig from "../../utils/Ground/GrdTypeConfig";
import { Stack, Container, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
//service
import turfService from "../../../services/turfService";
//loader
import { loadingContext } from "../../../context/loadingContext";
import Loader from "../../utils/Loader";

export default function TurfList() {
  const { loaderToggler } = useContext(loadingContext);

  const [spots , setSpots] = useState();
  //get id of district
  const { id } = useParams();
  useEffect(() => {
    const getTurfs = async () => {
      try {
        loaderToggler(true);
        // get districts
        const turfs = await turfService.getTurfs(id);
        setSpots(turfs);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getTurfs();
  }, []);

  return (
    <Page title="Spot List">
      <Container>
        <Loader/>
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          mb={2}
        >
          <Grid container spacing={3} rowSpacing={1} direction="row">
            {spots && spots.map((spot) => (
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
  );
}
