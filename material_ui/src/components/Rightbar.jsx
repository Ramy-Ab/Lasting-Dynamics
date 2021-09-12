import {
  Avatar,
  Container,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  Paper,
  Chip,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  PersonPinCircleOutlined,
  PhonelinkLockOutlined,
  Face,
  Done,
} from "@material-ui/icons";
import { AvatarGroup } from "@material-ui/lab";
import React from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: "0",
  },
  title: {
    fontWeight: "500",
    fontSize: "16px",
  },
  tabs: {
    flexGrow: 1,
    maxWidth: 500,
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Rightbar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>
        Online Freinds
      </Typography>
      <AvatarGroup max={4} style={{ marginBottom: "1rem" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>
        Some Tabs
      </Typography>
      <div className={classes.chip}>
        <Chip
          icon={<Face />}
          label="Clickable deletable"
          onClick={handleClick}
          onDelete={handleDelete}
        />

        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<Done />}
        />
        <Chip
          icon={<Face />}
          label="Primary clickable"
          clickable
          color="primary"
          onDelete={handleDelete}
          deleteIcon={<Done />}
        />
        <Chip
          label="Deletable primary"
          onDelete={handleDelete}
          color="primary"
        />
        <Chip
          icon={<Face />}
          label="Deletable secondary"
          onDelete={handleDelete}
          color="secondary"
        />
      </div>
    </Container>
  );
}

export default Rightbar;
