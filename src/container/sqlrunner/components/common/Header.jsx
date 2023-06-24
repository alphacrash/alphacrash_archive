import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <Link href="/" color="inherit" underline="none" variant="h6">
          <Typography variant="h6">alpha-sql</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
