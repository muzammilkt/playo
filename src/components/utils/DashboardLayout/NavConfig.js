import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import ViewListIcon from '@mui/icons-material/ViewList';
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
  },
];

export default NavConfig;
