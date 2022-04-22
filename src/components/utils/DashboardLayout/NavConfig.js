import FaceIcon from "@mui/icons-material/Face";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ArticleIcon from '@mui/icons-material/Article';
//nav bar options
const NavConfig = [
  {
    title: "Profile",
    path: "/app/personaldata",
    icon: FaceIcon,
  },
  {
    title: "Spot",
    path: "/app/spots",
    icon: SportsSoccerIcon,
  },
  {
    title: "Turf Details",
    path: "/app/spots/view",
    icon: ArticleIcon,
    permittedUser:"admin"
  },
];

export default NavConfig;
