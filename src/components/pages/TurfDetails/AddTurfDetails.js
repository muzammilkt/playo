import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Page from "../../utils/Page";
import {
  Stack,
  Container,
  Typography,
  Grid,
  Card,
  Tooltip,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
//components
import TextInput from "../../utils/Inputs/TextInput";
import ImageUpload from "../../utils/Inputs/ImageUpload";
import SelectInput from "../../utils/Inputs/SelectInput";

// material icons
import PublishIcon from "@mui/icons-material/Publish";
import { set } from "date-fns";

//service
import turfService from "../../../services/turfService";

export default function AddTurfDetails() {
  const navigate = useNavigate();
  //dropdown values
  const turfTypes = ["Mud", "Grass"];
  const turfsize = ["3's", "5's", "7's", "11's"];
  const [turfImage1, setTurfImage1] = useState();
  const [Name, setName] = useState();
  const [OwnerName, setOwnerName] = useState();
  const [OwnerPhoneNo, setOwnerPhoneNo] = useState();
  const [Post, setPost] = useState();
  const [Pin, setPin] = useState();
  const [Discription, setDiscription] = useState();
  const [TurfType, setTurfType] = useState();
  const [TurfSize, setTurfSize] = useState();
  //to accept selected district
  const [district, setDistrict] = useState();
  //state for district list frm backend
  const [districtData , setDistrictData] = useState();

  const districtChange = (e) => {
    setDistrict(e.target.value);
  };
  //get all districts
  useEffect(() => {
    const getDistricts = async () => {
      try {
        // loaderToggler(true);
        // get districts
        const districtsList = await turfService.getDistricts();
        setDistrictData(districtsList);
        // loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        // loaderToggler(false);
      }
    };
    getDistricts();
  }, []);
  console.log(district);

  //add turf
  const handleAddTurf = async () => {
    try {
      // await departmentService.deleteDepartment(id);
      navigate("/app/spots/view");
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <Page title="Add Turf Details">
      <Container>
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Turf Detais
          </Typography>
          <Grid>
            <h1>welcome</h1>
          </Grid>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
          <Grid container>
            <Grid xs={12} sm={6} md={6} mb={2}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <ImageUpload image={turfImage1} setImage={setTurfImage1} />
                {turfImage1 === "" && (
                  <Typography sx={{ mt: 2 }} variant="body2" color="error">
                    Turf image is required
                  </Typography>
                )}
                <Typography sx={{ mt: 2, color: "gray" }} variant={"body2"}>
                  Allowed *.jpeg, *.jpg, *.png, *.gif <br />
                  max size: 1MB
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="name"
                label="Turf Name"
                color="info"
                fullWidth
                textValue={Name}
                setTextValue={setName}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="ownerName"
                label="Owner Name"
                color="info"
                fullWidth
                textValue={OwnerName}
                setTextValue={setOwnerName}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="ownerNo"
                label="Owner Phone no"
                color="info"
                fullWidth
                textValue={OwnerPhoneNo}
                setTextValue={setOwnerPhoneNo}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                select
                varient="contained"
                value={district}
                name="district"
                label="District"
                // error={district === "" ? true : false}
                // helperText={district === "" ? `${name} is required` : null}
                color="info"
                fullWidth
                onChange={districtChange}
                InputLabelProps={{ shrink: district }}
              >
                {districtData &&
                  districtData.map((menuItem) => (
                    <MenuItem key={menuItem._id} value={menuItem?._id}>
                      {menuItem?.name}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="post"
                label="Post"
                color="info"
                fullWidth
                textValue={Post}
                setTextValue={setPost}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="pin"
                label="Pin"
                color="info"
                fullWidth
                textValue={Pin}
                setTextValue={setPin}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <SelectInput
                label="Type"
                name="type"
                menuItems={turfTypes}
                dropdownValue={TurfType}
                setDropdownValue={setTurfType}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <SelectInput
                label="Size"
                name="size"
                menuItems={turfsize}
                dropdownValue={TurfSize}
                setDropdownValue={setTurfSize}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextInput
                varient="contained"
                name="discription"
                label="Discription"
                color="info"
                fullWidth
                multiline
                rows={3}
                textValue={Discription}
                setTextValue={setDiscription}
              />
            </Grid>
          </Grid>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            mt={2}
          >
            <span>
              <Tooltip
                title={
                  !Name ||
                  !OwnerName ||
                  !OwnerPhoneNo ||
                  !district ||
                  !Post ||
                  !Pin ||
                  turfImage1 ||
                  !TurfType ||
                  !TurfSize ||
                  !Discription
                    ? "fill the fields"
                    : "sumbit fields"
                }
              >
                <Button
                  variant="contained"
                  color="info"
                  appap
                  onClick={handleAddTurf}
                  disabled={
                    !Name ||
                    !OwnerName ||
                    !OwnerPhoneNo ||
                    !district ||
                    !Post ||
                    !Pin ||
                    !turfImage1 ||
                    !TurfType ||
                    !TurfSize ||
                    !Discription
                  }
                  startIcon={<PublishIcon />}
                >
                  Submit
                </Button>
              </Tooltip>
            </span>
          </Stack>
        </Card>
      </Container>
    </Page>
  );
}
