import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useStyles } from "../App";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Navbar = () => {
  const classes = useStyles();

  return (
    <section className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <Link to="/">
          <Button className={classes.navbarButton} variant="contained">
            Home
          </Button>
        </Link>
        <Button className={classes.navbarButton} variant="contained">
          Contained
        </Button>
      </div>
      <div className={classes.navbarRight}>
        <Link to="/about">
          <Button className={classes.navbarButton} variant="contained">
            About Us
          </Button>
        </Link>
        {/* <Button className={classes.navbarLogout} variant="contained"> */}
        <div className={classes.iconDiv}>
          <AccountCircleTwoToneIcon className={classes.navbarIcon} />
        </div>
        {/* </Button> */}
      </div>
    </section>
  );
};

export default Navbar;
