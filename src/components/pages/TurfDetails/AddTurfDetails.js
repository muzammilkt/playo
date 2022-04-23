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

//service
import turfService from "../../../services/turfService";

//loader
import { loadingContext } from "../../../context/loadingContext";
import Loader from "../../utils/Loader";

export default function AddTurfDetails() {
  const { loaderToggler } = useContext(loadingContext);

  const { id } = useParams();
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
  //state for district list from backend
  const [districtData, setDistrictData] = useState();

  //setState function for setting data for editing
  function setState(data) {
    setTurfImage1();
    setName(data.turfname);
    setOwnerName(data.ownername);
    setOwnerPhoneNo(data.ownernmbr);
    setPost(data.post);
    setPin(data.pinnumber);
    setDiscription(data.discription);
    setTurfSize(data.size);
    setTurfType(data.type);
  }

  const districtChange = (e) => {
    setDistrict(e.target.value);
  };

  //get all districts for dropdown
  useEffect(() => {
    const getDistricts = async () => {
      try {
        loaderToggler(true);
        // get districts
        const districtsList = await turfService.getDistricts();
        setDistrictData(districtsList);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getDistricts();
  }, []);

  //data for editing
  useEffect(() => {
    const getTurfData = async () => {
      try {
        loaderToggler(true);
        // get turfData
        const TurfData = await turfService.getTurfDetailsById(id);
        setState(TurfData);
        loaderToggler(false);
      } catch (err) {
        console.error(err?.response?.data?.message);
        loaderToggler(false);
      }
    };
    getTurfData();
  }, []);

  //add turf
  const handleAddTurf = async () => {
    const ownerid = localStorage.getItem("userId");

    const TurfData = {
      img1: turfImage1,
      turfname: Name,
      ownername: OwnerName,
      ownernmbr: OwnerPhoneNo,
      ownerid,
      district: district,
      post: Post,
      pinnumber: Pin,
      type: TurfType,
      size: TurfSize,
      discription: Discription,
    };
    try {
      loaderToggler(true);
      if (!id) {
        const response = await turfService.AddTurfDetails(TurfData);
        localStorage.setItem("turfId", response._id);
        navigate(`/app/spots/view/`);
        loaderToggler(false);
      } else {
        loaderToggler(true);
        const updatedData = await turfService.EditTurfDetails(TurfData);
        navigate(`/app/spots/view/${updatedData._id}`);
        loaderToggler(false);
      }
    } catch (err) {
      console.error(err.message);
      loaderToggler(false);
    }
  };

  return (
    <Page title="Add Turf Details">
      <Container>
        <Loader />
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
