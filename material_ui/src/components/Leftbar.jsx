import {
  Container,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Brush,
  GitHub,
  Grade,
  Home,
  Storage,
  YouTube,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("sm")]: {
      color: "#555",
      backgroundColor: "#fff",
      border: "1px solid #ece7e7",
    },
    position: "sticky",
    top: "0",
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home </Typography>
      </div>
      <div className={classes.item}>
        <Brush className={classes.icon} />
        <Typography className={classes.text}>Frontend section</Typography>
      </div>
      <div className={classes.item}>
        <Storage className={classes.icon} />
        <Typography className={classes.text}>Backend section</Typography>
      </div>
      <div className={classes.item}>
        <YouTube className={classes.icon} />
        <Typography className={classes.text}>Recorded videos</Typography>
      </div>
      <div className={classes.item}>
        <GitHub className={classes.icon} />
        <Typography className={classes.text}>Git workflow</Typography>
      </div>
      <div className={classes.item}>
        <Grade className={classes.icon} />
        <Typography className={classes.text}>Favourite topics</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
