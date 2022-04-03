import { useRef, useState  } from "react";
import { useNavigate } from "react-router-dom";
// material icons 
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// material component
import { alpha } from "@mui/material/styles";
import {
  Button,
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuPopover from "./MenuPopover";
import avatar from '../../../images/avatar.jpg'

// popover menu options
// const MENU_OPTIONS = [
//   {
//     label: "Home",
//     icon: HomeIcon,
//     linkTo: "/home",
//   },
//   {
//     label: "Profile",
//     icon: PersonIcon,
//     linkTo: "#",
//   },
// ];


export default function AccountPopover() {
  const navigate = useNavigate();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  // handle account popover open
  const handleOpen = () => {
    setOpen(true);
  };

  //handle logout
  const HandleLogout = () => {
      localStorage.clear();
      navigate("../user/login");
      
  };

  //handle account popover close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            },
          }),
        }}
      >
        <Avatar src={avatar} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            muzammil
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            muzammil@gmail.com
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />
        

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={HandleLogout}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
