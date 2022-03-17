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
} from "@mui/material";
//components
import TextInput from '../../utils/Inputs/TextInput';
import ImageUpload from '../../utils/Inputs/ImageUpload';
// material icons
import PublishIcon from "@mui/icons-material/Publish";

export default function AddPersonal() {

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [adress, setAddress] = useState();
  const [profileImage,setProfileImage] = useState();

  //add data
  const handleAddData = async () => {
    try {
      // await departmentService.deleteDepartment(id);
      navigate("/app/personaldata/view");
    } catch (error) {
      console.error(error.response)
    }
  };

  return (
    <Page title="Add Personal Data">
      <Container>
        <Stack
          direction="row"
          alignItems="left"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h5" gutterBottom>
            Add Personal data
          </Typography>
        </Stack>
        <Card sx={{ padding: 3, marginBottom: 2 }}>
        <Grid xs={12} sm={6} md={6}>
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
                <ImageUpload image={profileImage} setImage={setProfileImage} />
                {profileImage === "" && (
                  <Typography sx={{ mt: 2 }} variant="body2" color="error">
                    Profile image is required
                  </Typography>
                )}
                <Typography sx={{ mt: 2, color: "gray" }} variant={"body2"}>
                  Allowed *.jpeg, *.jpg, *.png, *.gif <br />
                  max size: 1MB
                </Typography>
              </Grid>
            </Grid>
          <Grid container spacing={1} rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="name"
                label="Name"
                color="info"
                fullWidth
                textValue={name}
                setTextValue={setName}


              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="phoneNo"
                label="phone Number"
                color="info"
                fullWidth
                textValue={phoneNo}
                setTextValue={setPhoneNo}

              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="email"
                label="Email"
                color="info"
                fullWidth
                textValue={email}
                setTextValue={setEmail}

              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput
                varient="contained"
                name="adress"
                label="Adress"
                color="info"
                fullWidth
                textValue={adress}
                setTextValue={setAddress}

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
                  !name || !adress || !phoneNo || !email
                    ? "fill the fields"
                    : "sumbit fields"
                }
              >
                <Button
                  variant="contained"
                  color="info"
                  appap
                  onClick={handleAddData}
                  disabled={!name || !adress || !phoneNo || !email}
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
  )
};
