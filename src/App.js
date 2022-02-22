import Home from "./components/pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/utils/DashboardLayout";
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import Register from "./components/pages/Users/Register";
import Login from "./components/pages/Users/Login";
import AuthLayout from "./components/utils/UserLayout/AuthLayout";
import ForgotPassword from "./components/pages/Users/ForgotPassword";
import RecoverPassword from "./components/pages/Users/RecoverPassword";
import ProfileProvider from "./context/profileContext";
// import StudentProvider from "./context/studentContext";
import AddPersonal from "./components/pages/PersonalData/AddPersonal";
import ViewPersonalDtls from "./components/pages/PersonalData/ViewPersonalDtls";
import TimeList from "../src/components/pages/Schedule/TimeList";
import SlotStatus from "./components/pages/Schedule/SlotStatus";
import AddTurfDetails from "../src/components/pages/TurfDetails/AddTurfDetails";
import ViewTurf from "../src/components/pages/TurfDetails/ViewTurf";
import TurfList from "../src/components/pages/TurfDetails/TurfList";
import DistrictList from "../src/components/pages/TurfDetails/DistrictList";

function App() {
  return (
    <ThemeConfig>
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
                  element={<Navigate to="/app/personaldata/view" />}
                />
                <Route path="view" element={<ViewPersonalDtls />} />
                <Route path="addprofile" element={<AddPersonal />} />
              </Route>

               {/* route for spots view */}
               <Route path="spots">
                <Route
                  path="/app/spots"
                  element={<Navigate to="/app/spots/districtlist" />}
                />
                <Route path="turflist" element={<TurfList />} />
                <Route path="addDetails" element={<AddTurfDetails />} />
                <Route path="view" element={<ViewTurf />} />
                <Route path="districtlist" element={<DistrictList />} />
              </Route>

              {/* route for time view */}
              <Route path="time">
                <Route
                  path="/app/time"
                  element={<Navigate to="/app/time/status" />}
                />
                <Route path="list" element={<TimeList />} />
                <Route path="status" element={<SlotStatus />} />
              </Route>

            </Route>

            {/* user routes */}
            <Route path="/user" element={<AuthLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="forgot" element={<ForgotPassword />} />
              <Route path="recover" element={<RecoverPassword />} />
            </Route>


          </Routes>
        </ProfileProvider>
    </ThemeConfig>
  );
}

export default App;
