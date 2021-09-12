import React, { useState } from "react";
import {
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  },
  container: {
    backgroundColor: "#fff",
    height: "90vh",
    width: "70vh",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vh",
    },
  },
  form: { padding: theme.spacing(2) },
  item: {
    marginButton: theme.spacing(3),
  },
}));
function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} className={classes.modal}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item} style={{ marginBottom: "1rem" }}>
              <TextField label="Title" size="small" style={{ width: "100%" }} />
            </div>
            <div className={classes.item}>
              <TextField
                multiline
                rows={4}
                label="Descriptions"
                defaultValue="Tell your story.."
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField label="Visibility" select value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio size="small" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio size="small" />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="disabled"
                    disabled
                    control={<Radio size="small" />}
                    label="(Disabled option)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  setOpen(false);
                  setOpenAlert(true);
                }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>{" "}
    </>
  );
}

export default Add;
