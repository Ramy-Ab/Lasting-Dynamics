import {
  alpha,
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Cancel, Notifications, Search } from "@material-ui/icons";
import MailIcon from "@material-ui/icons/Mail";

import React from "react";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  tooltip: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.tooltip}>
          <Typography variant="h6" className={classes.logoLg}>
            Lasting Dynamics
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            LD Team
          </Typography>
          <div className={classes.search}>
            <Search />
            <InputBase className={classes.input} placeholder="Search ..." />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            <Search
              className={classes.searchButton}
              onClick={() => setOpen((prevOpen) => !prevOpen)}
            />
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <MailIcon />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications />
            </Badge>
            <Avatar
              alt="Ramy abadlia"
              src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            ></Avatar>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
