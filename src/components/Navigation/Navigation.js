import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.AppBar} position="static">
        <Toolbar className={styles.Toolbar}>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavigationNavItemActive}
            exact
            to="/"
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Trends
            </Typography>
          </NavLink>
          <NavLink className={styles.NavLink} to="/porofile/dave.xp">
            <AccountCircle />
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
