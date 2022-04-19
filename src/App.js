import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import UserRegister from "./components/pages/Users/UserRegister";
import Login from "./components/pages/Users/Login";
import OwnerRegister from "./components/pages/Users/OwnerRegister";
import AuthLayout from "./components/utils/UserLayout/AuthLayout";
import ForgotPassword from "./components/pages/Users/ForgotPassword";
import RecoverPassword from "./components/pages/Users/RecoverPassword";
import ProfileProvider from "./context/profileContext";
// import StudentProvider from "./context/studentContext";
import AddPersonal from "./components/pages/PersonalData/AddPersonal";
import ViewPersonalDtls from "./components/pages/PersonalData/ViewPersonalDtls";
import TimeList from "../src/components/pages/Schedule/TimeList";
import AddTurfDetails from "../src/components/pages/TurfDetails/AddTurfDetails";
import ViewTurf from "../src/components/pages/TurfDetails/ViewTurf";
import TurfViewById from "../src/components/pages/TurfDetails/TurfViewById";
import TurfList from "../src/components/pages/TurfDetails/TurfList";
import DistrictList from "../src/components/pages/TurfDetails/DistrictList";
import BookedUserDetails from "./components/pages/BookedDetails/BookedUserDetails";
//content provider
import LoadingProvider from "./context/loadingContext";

function App() {
  return (
    <ThemeConfig>
      <LoadingProvider>
      <GlobalStyles />
      {/* User profile provider */}
      <ProfileProvider>
        <Routes>
          {/* Home routes (Dashboard) */}
          <Route path="/app" element={<DashboardLayout />}>
            <Route path="/app" element={<Navigate to="/app/home" />} />
            <Route path="home" element={<Home />} />

            {/* route for personal view */}
            <Route path="personaldata">
              <Route
                path="/app/personaldata"
                element={<Navigate to="/app/personaldata/view/" />}
              />
              <Route path="view" element={<ViewPersonalDtls />} />
              <Route path="addprofile" element={<AddPersonal />} />
              <Route path="edit/:id" element={<AddPersonal />} />
            </Route>

            {/* route for spots view */}
            <Route path="spots">
              <Route
                path="/app/spots"
                element={<Navigate to="/app/spots/districtlist" />}
              />
              <Route path="turflist/:id" element={<TurfList />} />
              <Route path="addDetails/" element={<AddTurfDetails />} />
              <Route path="view" element={<ViewTurf />} />
              <Route path="viewby/:id" element={<TurfViewById />} />
              <Route path="districtlist" element={<DistrictList />} />
              <Route path="edit/:id" element={<AddTurfDetails />} />
            </Route>

            {/* route for time view */}
            <Route path="time">
              <Route
                path="/app/time"
                element={<Navigate to="/app/time/listforowner" />}
              />
              <Route path="listforbooking/:id" element={<TimeList />} />
              <Route path="listforowner/:id" element={<TimeList />} />

            </Route>
            <Route path="bookedby">
            <Route
                path="/app/bookedby"
                element={<Navigate to="app/booked/userList" />}
              />
            <Route path="userList/:id" element={<BookedUserDetails />} />
            </Route>
          </Route>

          {/* user routes */}
          <Route path="/user" element={<AuthLayout />}>
            <Route path="register" element={<UserRegister />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="recover" element={<RecoverPassword />} />
            <Route path="ownerregister" element={<OwnerRegister />} />
          </Route>
          <Route path="/" element={<Navigate to="/user/login" />} />
        </Routes>
      </ProfileProvider>
      </LoadingProvider>
    </ThemeConfig>
  );
}

export default App;
