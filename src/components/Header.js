import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from '@mui/material/Toolbar';

export default function Header() {
  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          [LOGO] Kompany handelsregister
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
