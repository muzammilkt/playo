import { alpha, styled } from "@mui/material/styles";
import { Card, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

export default function GroundCard({ data, type }) {
  const { colorType } = type;
  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    textAlign: "center",
    padding: theme.spacing(2, 1, 5, 2),
    color: theme.palette[colorType].darker,
    backgroundColor: theme.palette[colorType].lighter,
  }));
  const IconWrapperStyle = styled("div")(({ theme }) => ({
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    color: theme.palette[colorType].dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(
      theme.palette[colorType].dark,
      0
    )} 0%, ${alpha(theme.palette[colorType].dark, 0.24)} 100%)`,
  }));
  const ShortFormStyle = styled("div")(({ theme }) => ({
    fontWeight: "600",
    fontSize: theme.spacing(2.3),
    textTransform: "uppercase",
  }));
  return (
    <Link to={`/app/time/listforbooking/${data._id}`} style={{ textDecoration: "none" }}>
      <RootStyle>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          {/* <Link to={`/app/department/edit/${data._id}`} style={{ color: "none" }}>
            <ModeEditOutlineOutlinedIcon sx={{ margin: "8px", opacity: "0.5", height: "3vh", width: "2vw" }} />
          </Link> */}
        </Grid>
        <IconWrapperStyle>
          {<ShortFormStyle>{data && data.img1}</ShortFormStyle>}
        </IconWrapperStyle>
        <Typography variant="h5">{data && data.turfname}</Typography>
        <Typography sx={{ mt: 4 }} variant="subtitle2">
          {data && data.place}
        </Typography>
        <Typography variant="subtitle2">By:{data && data.ownername}</Typography>
        <Typography variant="subtitle2">{data && data.ownernmbr}</Typography>
        <Typography variant="h5">Location: {data && data.post}</Typography>
        <Typography variant="subtitle2">{data && data.address}</Typography>
        <Typography variant="subtitle2">Size:{data && data.size}</Typography>
        <Typography variant="subtitle2">Type:{data && data.type}</Typography>
        <Typography varient="body2">
          <Link to={`../viewby/${data._id}`}>
            <ReadMoreIcon />
          </Link>
        </Typography>
      </RootStyle>
    </Link>
  );
}
