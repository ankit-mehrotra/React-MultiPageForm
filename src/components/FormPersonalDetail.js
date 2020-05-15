import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { orange } from "@material-ui/core/colors";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
export default function FormPersonalDetails({
  nextStep,
  values,
  handleChange,
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

          <Button color="inherit">Enter Personal Details</Button>
        </Toolbar>
      </AppBar>
      <br />
      <TextField
        placeholder="Enter your Occupation"
        name="occupation"
        label="Occupation"
        onChange={handleChange}
        value={values.occupation}
        variant="outlined"
      />
      <br />
      <TextField
        placeholder="Enter your City"
        name="city"
        label="CITY"
        onChange={handleChange}
        value={values.city}
        variant="outlined"
      />
      <br />
      <TextField
        placeholder="Enter your bio"
        name="bio"
        label="BIO"
        onChange={handleChange}
        value={values.bio}
        variant="outlined"
      />
      <br />
      <Button
        variant="contained"
        style={styles.button}
        color="secondary"
        onClick={Back}
      >
        Continue
      </Button>
      <Button
        variant="contained"
        style={styles.button}
        color="primary"
        onClick={Continue}
      >
        Continue
      </Button>
    </ThemeProvider>
  );
}

const styles = {
  button: {
    margin: 15,
  },
};
