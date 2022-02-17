import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const UserTypeConfig =[
    {
        title:'Owners Registered',
        Icon:SupervisorAccountIcon,
        colorType:"primary",
        total:'250',

    },
    {
        title:'Grounds Added',
        Icon:GroupIcon,
        colorType:"error",
        total:'200',
    },
    {
        title:'Users Registered',
        Icon:GroupIcon,
        colorType:"info",
        total:'120',
    },
    {
        title:"Todays Booking",
        Icon:AccountBalanceIcon,
        colorType:"warning",
        total:'12',
    }
]

export default UserTypeConfig;