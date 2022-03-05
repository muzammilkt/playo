// import { Icon } from '@iconify/react';
// import appleFilled from '@iconify/icons-ant-design/apple-filled';
// material
import { alpha, styled } from "@mui/material/styles";
import { Card, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
// import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
// utils
// import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function DtCard({ data, type }) {
  
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
    <Link to="/app/spots/turflist" style={{ textDecoration: "none" }}>
      <RootStyle>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
        </Grid>
        <IconWrapperStyle>
          {<ShortFormStyle>{data && data.shortName}</ShortFormStyle>}
        </IconWrapperStyle>
        <Typography variant="h5">{data && data.name}</Typography>
      </RootStyle>
    </Link>
  );
}
