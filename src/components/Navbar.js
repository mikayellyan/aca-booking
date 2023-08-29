import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useStyles } from "../App";

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
        <Button className={classes.navbarLogOut} variant="contained">
          Contained
        </Button>
      </div>
    </section>
  );
};

export default Navbar;
