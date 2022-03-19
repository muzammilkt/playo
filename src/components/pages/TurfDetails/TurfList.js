import React , {useEffect , useState} from "react";
import Page from "../../utils/Page";
import GroundCard from "../../utils/Ground/GroundCard";
import GrdTypeConfig from "../../utils/Ground/GrdTypeConfig";
import { Stack, Container, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
//service
import turfService from "../../../services/turfService";
// const spots = [
//   {
//     name: "marena",
//     place: "kumminipparmb",
//     phoneNo: "545345643",
//     shortName: "ma",
//   },
//   {
//     name: "killadi",
//     place: "pallikkal",
//     phoneNo: "6587563",
//     shortName: "kd",
//   },
// ];

export default function TurfList() {
  const [spots , setSpots] = useState();
  //get id of district
  const { id } = useParams();
  useEffect(() => {
    const getTurfs = async () => {
      try {
        // loaderToggler(true);
        // get districts
        const turfs = await turfService.getTurfs(id);
        console.log(turfs)
        setSpots(turfs);
        // loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        // loaderToggler(false);
      }
    };
    getTurfs();
  }, []);
  // console.log(id);
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
