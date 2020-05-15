import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { orange } from "@material-ui/core/colors";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default function Confirm({
  nextStep,
  values: { firstName, lastName, email, occupation, city, bio },
  backbtn,
}) {
  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
    },
  });

  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Back = (e) => {
    e.preventDefault();
    backbtn();
  };
  return (
    <ThemeProvider theme={outerTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>

          <Button color="inherit">Confirm user Data</Button>
        </Toolbar>
      </AppBar>
      <br />
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Occupation" secondary={occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bio" secondary={bio} />
        </ListItem>
      </List>
      <Button
        variant="contained"
        style={styles.button}
        color="secondary"
        onClick={Back}
      >
        Back
      </Button>
      <Button
        variant="contained"
        style={styles.button}
        color="primary"
        onClick={Continue}
      >
        Confirm & Continue
      </Button>
    </ThemeProvider>
  );
}

const styles = {
  button: {
    margin: 15,
  },
};
