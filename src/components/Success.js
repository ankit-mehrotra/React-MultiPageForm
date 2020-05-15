import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { orange } from "@material-ui/core/colors";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export default function Success() {
  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
    },
  });

  return (
    <ThemeProvider theme={outerTheme}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Success</Button>
        </Toolbar>
        <h1>SuccessFully Submitted Your Form</h1>
      </AppBar>
    </ThemeProvider>
  );
}
