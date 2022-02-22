import PieChartIcon from "@mui/icons-material/PieChart";
import FaceIcon from "@mui/icons-material/Face";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import DateRangeIcon from '@mui/icons-material/DateRange';
//nav bar options
const NavConfig = [
  {
    title: "Home",
    path: "/app/home",
    icon: PieChartIcon,
  },
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
    title:"Slot Status",
    path:"/app/time",
    icon:DateRangeIcon,
  },
  {
    title: "Turf Details",
    path: "/app/spots/view",
    icon: SportsSoccerIcon,
  },
];

export default NavConfig;
