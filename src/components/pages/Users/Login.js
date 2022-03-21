import { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PasswordField from "./utils/PasswordField";
import TextInput from "./utils/TextInput";
import SubmitButton from "./utils/SubmitButton";
import { useNavigate } from "react-router-dom";
//services
import authService from "../../../services/authService";
//constants
import LOCAL_KEYS from "../../../constants/LOCAL_KEY";
//context
// import Page from "../../utils/Page";
import { id } from "date-fns/locale";
// import { loadingContext } from "../../../context/loadingContext";
// import Loader from "../../utils/Loader";
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  minHeight: "80vh",
  flexDirection: "column",
  justifyContent: "center",
}));

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authErrors, setAuthErrors] = useState();

  const clearError = () => setAuthErrors("");

  const redirectionHandler = (type, status) => {
    console.log(type,status);
    // if (type === "user") return navigate("/app/home");
    if (type === "admin" && status === "filled") {
      return navigate(`/app/spots/view/${id}`);
    } else if (type === "admin") {
      return navigate("/app/spots/addDetails");
    }
    if (type === "user" && status === "filled") {
      return navigate(`/app/personaldata/view`);
    }
  };
  const handleClick = async () => {
    try {
      clearError();
      // loaderToggler(true);
      const data = {
        email,
        password,
      };
      // logging in user
      const response = await authService.loginUser(data);
      console.log(response);
      // console.log(response.token)
      //storing token in localStorage
      localStorage.setItem(LOCAL_KEYS.AUTH_TOKEN, response.token);
      localStorage.setItem("userId",response._id)
      redirectionHandler(response.userType, response.status);
      
      // loaderToggler(false);
    } catch (err) {
      console.log(err);
      setAuthErrors(err?.response?.data?.message);
      // loaderToggler(false);
    }
  };

  return (
    <Container>
      <ContentStyle>
        <Card sx={{ p: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography textAlign="center" variant="h3" gutterBottom>
              Login
            </Typography>
          </Box>
          <Stack spacing={2}>
            <TextInput
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
              authErrors={authErrors}
            />
            <PasswordField
              label="Password"
              value={password}
              setValue={setPassword}
              authErrors={authErrors}
              showError
            />
            <Stack
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <Link
                component={RouterLink}
                variant="subtitle2"
                to="/user/forgot"
              >
                Forgot password
              </Link>

              <Link
                component={RouterLink}
                variant="subtitle2"
                to="/user/register"
              >
                Register as a user
              </Link>
              <Link
                component={RouterLink}
                variant="subtitle2"
                to="/user/ownerregister"
              >
                Register as a TurfOwner
              </Link>
            </Stack>
            <SubmitButton
              disabled={!email || !password ? true : false}
              name="Login"
              onClick={handleClick}
            />
          </Stack>
        </Card>
      </ContentStyle>
    </Container>
  );
}
