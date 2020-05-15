import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { orange } from "@material-ui/core/colors";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
export default function FormUserDetails({ nextStep, values, handleChange }) {
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
  return (
    <ThemeProvider theme={outerTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="end" color="inherit" aria-label="menu"></IconButton>

          <Button color="inherit">Enter Form Details</Button>
        </Toolbar>
      </AppBar>
      <br />
      <TextField
        placeholder="Enter your First Name"
        name="firstName"
        label="FIRST NAME"
        onChange={handleChange}
        value={values.firstName}
        variant="outlined"
      />
      <br />
      <TextField
        placeholder="Enter your last Name"
        name="lastName"
        label="LAST NAME"
        onChange={handleChange}
        value={values.lastName}
        variant="outlined"
      />
      <br />
      <TextField
        placeholder="Enter your Email"
        name="email"
        label="EMAIL"
        onChange={handleChange}
        value={values.email}
        variant="outlined"
      />
      <br />
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
